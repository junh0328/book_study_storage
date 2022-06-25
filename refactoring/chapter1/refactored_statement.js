// Before refactoring
let invoices = [
  {
    customer: "BigCo",
    performances: [
      {
        playID: "hamlet",
        audience: 55,
      },
      {
        playID: "as-like",
        audience: 35,
      },
      {
        playID: "othello",
        audience: 40,
      },
    ],
  },
];

let plays = {
  hamlet: {
    name: "hamlet",
    type: "tragedy",
  },
  "as-like": {
    name: "As You Like It",
    type: "comedy",
  },
  othello: {
    name: "Othello",
    type: "tragedy",
  },
};

// amountFor 함수 분리하기
function amountFor(aPerformance) {
  let result = 0;

  switch (playFor(aPerformance).type) {
    case "tragedy":
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;

    case "comedy":
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
  }

  return result;
}

function playFor(aPerformance) {
  return plays[aPerformance.playID];
}

function volumeCreditsFor(aPerformance) {
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0);
  if ("comedy" === playFor(aPerformance).type)
    result += Math.floor(aPerformance.audience / 5);
  return result;
}

// 함수 선언 바꾸기 - 내부 로직을 usd 로
function usd(aNumber) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100); // 단위 변환 로직도 이 함수 안으로 이동
}

function totalVolumeCredits(invoice) {
  let result = 0;
  for (let perf of invoice.performances) {
    result += volumeCreditsFor(perf);
  }
  return result;
}

function appleSauce(invoice) {
  let result = 0;
  for (let perf of invoice.performances) {
    result += amountFor(perf);
  }
  return result;
}

function statement(invoice, plays) {
  let result = `청구내역 (고객명: ${invoice.customer})\n`;

  for (let perf of invoice.performances) {
    // 청구 내역을 출력한다.
    result += `${playFor(perf).name}: ${usd(amountFor(perf))} (${
      perf.audience
    }석)\n`;
  }

  result += `총액: ${usd(appleSauce(invoice))}\n`;
  result += `적립 포인트: ${totalVolumeCredits(invoice)}점\n`;
  return result;
}

invoices.map((invoice) => console.log(statement(invoice, plays)));
