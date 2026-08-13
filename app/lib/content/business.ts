// BUSINESS — Year 10.
//
// ⚠️ NO YEAR 9. Business is a GCSE option chosen at the end of Year 9 and begun
// in Year 10, so there is no Year 9 content to write. Year 11 is planned and
// not yet written.
//
// ⚠️ BOARDS DIVIDE THIS SUBJECT MORE THAN MOST. Edexcel runs Theme 1
// ("investigating small business", roughly Year 10) and Theme 2 ("building a
// business", roughly Year 11). AQA runs six units across two papers and mixes
// the order. OCR splits it differently again. The topics here are the common
// core every board covers early — starting a business, understanding the
// market, and handling the money. Check the order against your own school's
// scheme of work; the CONTENT overlaps almost completely even where the
// sequence does not.
//
// ⚠️ FIGURES DATE. Corporation tax, the National Living Wage, VAT thresholds
// and interest rates all change, usually every April. Where a number appears
// below it is there to make a method concrete, not to be quoted in an exam as
// current. Look up the live figure.
//
// EMPHASIS: Matthew asked for flashcards to carry the weight here, because
// Business is a subject where marks are lost to imprecise definitions more than
// to anything else — "profit" and "revenue" used interchangeably, "cash" and
// "profit" confused. So every topic below is definition-heavy, with a smaller
// number of calculation questions concentrated in the four topics that actually
// have arithmetic in them.

import type { TopicContent } from "./index";

export const BUSINESS: Record<string, TopicContent> = {
  "business/enterprise-and-entrepreneurship": {
    summary:
      "Every business on earth started because somebody spotted a need nobody was meeting and decided to do something about it. This topic is about that moment and the person behind it: what enterprise actually means, what entrepreneurs really do, why most of them fail, and why anyone would take the risk anyway. It is the foundation for everything else in the course, because every later topic is really a question about how to survive that risk.",
    keyFacts: [
      {
        heading: "What enterprise means",
        points: [
          "Enterprise is the act of spotting an opportunity and taking a risk to turn it into a business.",
          "An entrepreneur is the person who does it: they organise the other resources, take the risk, and keep the reward if it works.",
          "Businesses exist to meet customer NEEDS (things people must have) and WANTS (things people would like).",
          "Adding value means making the finished product worth more to a customer than the cost of the inputs used to make it — that gap is where profit comes from.",
          "Ways to add value: branding, convenience, quality, design, unique selling point, and excellent customer service.",
        ],
      },
      {
        heading: "What entrepreneurs actually do",
        points: [
          "Organise resources — bringing together the land, labour and capital a business needs.",
          "Make business decisions, especially early on when there is nobody else to make them.",
          "Take risks: entrepreneurs put their own money, time and reputation on the line.",
          "Innovate — finding a better way of doing something, not necessarily inventing something new.",
          "Common characteristics: determination, risk tolerance, organisation, confidence and the ability to spot an opportunity.",
        ],
      },
      {
        heading: "Risk and reward",
        points: [
          "Risk means the possibility of losing something: money, time, security, or reputation.",
          "The main risks are business failure, financial loss, and lack of security compared with employment.",
          "The main rewards are profit, independence, and personal satisfaction from building something.",
          "Risk and reward are linked: opportunities with the largest possible rewards usually carry the largest chance of failure.",
          "Roughly a fifth of UK start-ups close within their first year and around half within five years — the exact figures move year to year, so check current ONS data rather than quoting a number.",
        ],
      },
      {
        heading: "Why businesses fail",
        points: [
          "Running out of cash is the single most common cause, and it is not the same thing as being unprofitable.",
          "Poor market research — building something nobody actually wanted.",
          "Competition, especially from larger firms with lower costs.",
          "Poor management of stock, staff or money.",
          "External shocks the owner could not control: recession, interest rate rises, a supplier collapsing.",
        ],
      },
    ],
    flashcards: [
      { term: "Enterprise", definition: "Spotting an opportunity and taking a risk to set up a business to exploit it." },
      { term: "Entrepreneur", definition: "A person who organises resources and takes the risk of setting up and running a business." },
      { term: "Need", definition: "Something a person must have to survive or function, such as food, shelter or heating." },
      { term: "Want", definition: "Something a person would like to have but does not need, such as a games console." },
      { term: "Adding value", definition: "Increasing the worth of a product to the customer so that its selling price exceeds the cost of the inputs." },
      { term: "Unique selling point (USP)", definition: "The feature that makes a product different from, and better than, its competitors." },
      { term: "Innovation", definition: "Improving an existing product, process or service, rather than inventing something entirely new." },
      { term: "Invention", definition: "Creating something entirely new that did not exist before." },
      { term: "Risk", definition: "The possibility that a business decision leads to a loss of money, time or security." },
      { term: "Reward", definition: "The benefit gained from taking a business risk, such as profit, independence or satisfaction." },
      { term: "Opportunity cost", definition: "The next best alternative given up when a choice is made." },
      { term: "Factors of production", definition: "The four resources needed to produce anything: land, labour, capital and enterprise." },
      { term: "Capital", definition: "The money and equipment invested in a business to allow it to produce goods or services." },
      { term: "Start-up", definition: "A business in its earliest stage of trading." },
      { term: "Business failure", definition: "When a business stops trading because it can no longer meet its costs or debts." },
      { term: "Independence", definition: "Being your own boss — making your own decisions rather than following an employer's." },
    ],
    examTips: [
      {
        tip: "Learn the difference between innovation and invention",
        detail:
          "Invention is something brand new; innovation is doing something existing better. Most entrepreneurs innovate. Examiners ask this precisely because the two get muddled.",
      },
      {
        tip: "'Adding value' is not the same as 'increasing price'",
        detail:
          "Adding value means giving the customer a reason to pay more — branding, quality, convenience. Simply charging more without changing anything usually loses customers instead.",
      },
      {
        tip: "Name the risk AND the reward when asked to evaluate",
        detail:
          "Questions on entrepreneurship almost always want both sides. An answer that lists only risks caps itself well below full marks.",
      },
      {
        tip: "Apply your answer to the business in the case study",
        detail:
          "Business is an applied subject. 'An entrepreneur takes risks' is a textbook line; 'Priya risked her £8,000 savings on stock she might not sell' is the same point applied, and that is what earns application marks.",
      },
      {
        tip: "Give a judgement when the command word is 'evaluate' or 'justify'",
        detail:
          "These questions carry marks for reaching a supported conclusion. Write 'overall, the biggest risk is X because Y' rather than stopping after listing both sides.",
      },
      {
        tip: "Don't confuse 'ran out of cash' with 'made a loss'",
        detail:
          "Profitable businesses fail all the time because the money arrives later than the bills. This distinction runs through the whole course and starts here.",
      },
    ],
    practice: [
      {
        question: "What word describes the person who takes the risk of setting up and running a business?",
        accept: ["entrepreneur", "an entrepreneur"],
        answer:
          "An entrepreneur. They organise the other factors of production, make the decisions and carry the risk personally, which is why they keep the profit if it works.",
      },
      {
        question: "Complete the term: making a product worth more to a customer than the cost of its inputs is called adding ______.",
        accept: ["value", "adding value"],
        answer:
          "Value. The gap between what the inputs cost and what a customer will pay is exactly where profit comes from, so adding value is the whole point of a business.",
      },
      {
        question: "Is a smartphone a need or a want? Answer with one word.",
        accept: ["want", "a want"],
        answer:
          "A want. Needs are the things required to survive or function — food, shelter, warmth. Almost everything a business sells is a want, which is why marketing matters so much.",
      },
      {
        question: "What is the three-letter abbreviation for the feature that makes a product different from its competitors?",
        accept: ["usp", "u.s.p", "unique selling point"],
        answer:
          "USP — unique selling point. It is the answer to 'why buy yours instead of theirs', and it can be price, quality, design, service or convenience.",
      },
      {
        question: "Creating something that has never existed before is called what?",
        accept: ["invention", "an invention", "inventing"],
        answer:
          "Invention. Compare this with innovation, which is improving something that already exists. Most successful entrepreneurs innovate rather than invent.",
      },
      {
        question: "Improving an existing product or process rather than creating a new one is called what?",
        accept: ["innovation", "innovating", "an innovation"],
        answer:
          "Innovation. Deliveroo did not invent restaurants or bicycles; it innovated by connecting them through an app. That is the more common route to a successful business.",
      },
      {
        question: "How many factors of production are there?",
        accept: ["4", "four"],
        answer:
          "Four: land, labour, capital and enterprise. Enterprise is the one that organises the other three, which is why the entrepreneur is treated as a resource in its own right.",
      },
      {
        question: "Name the factor of production that means the money and equipment invested in a business.",
        accept: ["capital"],
        answer:
          "Capital. It covers both the money put in and the equipment that money buys — machinery, vehicles, computers.",
      },
      {
        question: "What term describes the next best alternative given up when a choice is made?",
        accept: ["opportunity cost", "opportunitycost"],
        answer:
          "Opportunity cost. If an entrepreneur leaves a £30,000 job to start a business, that salary is the opportunity cost of starting it — a real cost that never appears on any invoice.",
      },
      {
        question: "What is the single most common cause of new businesses failing?",
        accept: ["running out of cash", "cash flow", "cashflow", "poor cash flow", "running out of money"],
        answer:
          "Running out of cash. Note this is not the same as making a loss: a profitable business fails if customers pay in 60 days while wages are due weekly.",
      },
      {
        question: "Other than profit, name one reward of being an entrepreneur.",
        accept: ["independence", "satisfaction", "personal satisfaction", "being your own boss", "control", "flexibility"],
        answer:
          "Independence, personal satisfaction, control over your own decisions, or flexibility over hours. Many entrepreneurs rank these above money, which is worth remembering in evaluation questions.",
      },
      {
        question: "True or false: an entrepreneur risks only money.",
        accept: ["false", "f"],
        answer:
          "False. They also risk time, security, reputation and the salary they gave up. Exam answers that mention only money miss most of the picture.",
      },
      {
        question: "What is the name for a business in its earliest stage of trading?",
        accept: ["start-up", "startup", "a start-up", "start up"],
        answer:
          "A start-up. The label matters because start-ups face particular problems — no track record with lenders, no established customers, and no cash reserves to absorb a bad month.",
      },
      {
        question: "Which factor of production refers to the natural resources a business uses?",
        accept: ["land"],
        answer:
          "Land. In Business this means all natural resources — not just the ground itself but the raw materials taken from it, such as timber, water or oil.",
      },
      {
        question: "Explain why a business that adds a lot of value can charge more than its costs. Write two or three sentences.",
        answer:
          "Adding value gives the customer a reason to pay above the cost of the raw materials — the branding, quality, convenience or service is worth something to them in itself. A coffee shop's beans might cost 30p while the drink sells for £3.20, because the customer is also buying somewhere warm to sit, speed, and a brand they trust. The larger that gap, the more profit is available per sale. Mark this one yourself: give yourself the marks if you said value is about the customer's perception, gave an example, and linked the gap to profit.",
      },
      {
        question: "A friend says the safest way to start a business is to invent something completely new. Evaluate that view.",
        answer:
          "Invention can create a genuine monopoly and a strong USP, so the reward is potentially enormous. But it is usually the RISKIEST route, not the safest: it takes far more money and time, there is no proof anybody wants the product, and patents are expensive to obtain and defend. Innovating on something that already sells is lower risk because demand is already proven — the entrepreneur only has to be better, not first. Overall the friend has confused 'highest reward' with 'safest'; these are usually opposites. Mark this one yourself: full marks need both sides and a clear judgement at the end.",
      },
      {
        question: "What is an ENTREPRENEUR?",
        choices: [
          "Someone who takes a risk to set up and run a business",
          "An employee of a large company",
          "A government adviser on business",
          "A customer who buys regularly",
        ],
        accept: [
          "Someone who takes a risk to set up and run a business",
        ],
        answer: "Risk-taking is the defining feature. Entrepreneurs organise the other factors of production and bear the consequences if it fails.",
      },
      {
        question: "Which of these is a NON-financial motive for starting a business?",
        choices: [
          "Independence and being your own boss",
          "Making a profit",
          "Increasing sales revenue",
          "Raising more capital",
        ],
        accept: [
          "Independence and being your own boss",
        ],
        answer: "Independence, a social aim, or a personal interest are non-financial. Profit and revenue are financial motives.",
      },
      {
        question: "What does ADDING VALUE mean?",
        choices: [
          "Increasing what a customer will pay above the cost of the inputs",
          "Raising prices with no other change",
          "Reducing the number of staff",
          "Buying cheaper raw materials",
        ],
        accept: [
          "Increasing what a customer will pay above the cost of the inputs",
        ],
        answer: "Branding, convenience, quality and speed all add value, which is what allows a business to charge more than its costs.",
      },
      {
        question: "Which is a common reason new businesses fail?",
        choices: [
          "Running out of cash",
          "Having too many customers",
          "Selling at a profit",
          "Employing skilled staff",
        ],
        accept: [
          "Running out of cash",
        ],
        answer: "Cash flow problems kill profitable businesses too — profit on paper does not pay a bill that is due today.",
      },
      {
        question: "Opportunity cost means:",
        choices: [
          "The value of the next best option given up",
          "The money spent on a purchase",
          "The cost of borrowing money",
          "The cost of an opportunity that failed",
        ],
        accept: [
          "The value of the next best option given up",
        ],
        answer: "Every choice has one, because resources used one way cannot be used another.",
      },
    ],
    misconceptions: [
      {
        wrong: "Entrepreneurs are people who invent brand new things.",
        right:
          "Most entrepreneurs innovate rather than invent — they do something that already exists more cheaply, more conveniently or more attractively. Invention is one route in, and the rarest one.",
      },
      {
        wrong: "Adding value just means putting the price up.",
        right:
          "Adding value means giving the customer a reason to pay more. Raising the price without changing anything is not adding value, it is losing customers.",
      },
      {
        wrong: "A business fails because it isn't making a profit.",
        right:
          "The commonest cause of failure is running out of CASH. A profitable business dies if the money owed to it arrives after its own bills are due.",
      },
      {
        wrong: "Risk is just about losing money.",
        right:
          "Entrepreneurs also risk time, job security, reputation and the salary they gave up to start. That forgone salary is a real opportunity cost even though nobody ever invoices for it.",
      },
      {
        wrong: "Needs and wants are basically the same thing.",
        right:
          "A need is required to survive or function; a want is desired but optional. The distinction matters because sales of wants collapse in a recession while sales of needs hold up.",
      },
    ],
  },

  "business/business-aims-and-objectives": {
    summary:
      "A business without an aim is just activity. This topic covers what businesses are actually trying to achieve — survival, profit, growth, market share, customer satisfaction, social and ethical goals — and how those aims turn into specific objectives that can be measured. It also covers why aims change: what a business wants in its first frightening year is rarely what it wants in year ten.",
    keyFacts: [
      {
        heading: "Aims versus objectives",
        points: [
          "An AIM is the long-term goal — the general direction, such as 'to grow'.",
          "An OBJECTIVE is a specific, measurable target that helps achieve the aim, such as 'to open two more shops by December 2027'.",
          "Objectives are often written to be SMART: Specific, Measurable, Achievable, Realistic and Time-bound.",
          "Objectives give staff something concrete to work towards and give owners something to measure performance against.",
          "Without a measurable objective, nobody can tell whether the aim is being met.",
        ],
      },
      {
        heading: "Common business aims",
        points: [
          "SURVIVAL — the priority for almost every new business, and for established ones during a recession.",
          "PROFIT — the reward for the owner's risk, and the source of money for reinvestment.",
          "GROWTH — increasing sales, staff, outlets or the range of products.",
          "MARKET SHARE — increasing the proportion of total sales in the market that belong to this business.",
          "CUSTOMER SATISFACTION — repeat custom is far cheaper than winning new customers.",
          "SOCIAL AND ETHICAL AIMS — fair pay, environmental responsibility, supporting the local community.",
        ],
      },
      {
        heading: "Why aims differ and change",
        points: [
          "New businesses usually aim at survival first; profit and growth come later.",
          "Aims change as circumstances change: a recession can turn a growth aim back into a survival aim overnight.",
          "Owners' personal goals matter — some deliberately stay small to keep control or a manageable workload.",
          "Aims can conflict: growing quickly often reduces short-term profit because of the cost of expansion.",
          "Social enterprises put a social aim first and reinvest most of their profit into that purpose.",
        ],
      },
      {
        heading: "Measuring success",
        points: [
          "Financial measures: revenue, profit, and profit margins.",
          "Market measures: market share, number of customers, customer retention.",
          "Non-financial measures: customer satisfaction scores, staff turnover, environmental impact.",
          "Market share (%) = (business's sales ÷ total market sales) × 100.",
          "Success is relative — a 3% market share is dreadful for a supermarket and remarkable for a new soft drink.",
        ],
      },
    ],
    flashcards: [
      { term: "Aim", definition: "A long-term goal that a business wants to achieve, such as growth or survival." },
      { term: "Objective", definition: "A specific, measurable target set in order to achieve an aim." },
      { term: "SMART objective", definition: "An objective that is Specific, Measurable, Achievable, Realistic and Time-bound." },
      { term: "Survival", definition: "The aim of continuing to trade — the usual first priority for a new or struggling business." },
      { term: "Profit", definition: "The amount left when total costs are subtracted from total revenue." },
      { term: "Growth", definition: "An increase in the size of a business, measured by sales, staff, outlets or market share." },
      { term: "Market share", definition: "The proportion of total sales in a market that belongs to one business, given as a percentage." },
      { term: "Customer satisfaction", definition: "How well a product or service meets customer expectations, often measured by reviews or repeat custom." },
      { term: "Social objective", definition: "A goal to benefit society or the community rather than to make money." },
      { term: "Ethical objective", definition: "A goal to do business in a morally acceptable way, such as fair pay or humane sourcing." },
      { term: "Social enterprise", definition: "A business whose main purpose is a social or environmental aim, with most profit reinvested into that purpose." },
      { term: "Customer retention", definition: "Keeping existing customers so that they buy again, rather than relying on new ones." },
      { term: "Reinvestment", definition: "Putting profit back into the business to fund growth rather than paying it to the owners." },
      { term: "Sales revenue", definition: "The total income from sales, calculated as selling price multiplied by quantity sold." },
      { term: "Stakeholder objective", definition: "A goal held by a group affected by the business, which may conflict with the owner's own aims." },
      { term: "Conflicting objectives", definition: "Two aims that cannot both be fully met at once, such as rapid growth and high short-term profit." },
    ],
    examTips: [
      {
        tip: "Never use 'aim' and 'objective' interchangeably",
        detail:
          "The aim is the direction; the objective is the measurable target. Questions ask for one specifically, and using the wrong one costs the mark even when the idea is right.",
      },
      {
        tip: "If asked to write an objective, make it measurable and dated",
        detail:
          "'Increase sales' is an aim. 'Increase sales by 15% by 31 March 2028' is an objective. Include a number and a deadline every time.",
      },
      {
        tip: "New businesses aim at survival, not profit",
        detail:
          "It sounds counter-intuitive but it is the standard answer for a start-up, and examiners expect it. Profit maximisation is a later-stage aim.",
      },
      {
        tip: "Watch for aims that conflict",
        detail:
          "Growth usually costs money now and returns it later, so it reduces short-term profit. Noticing the conflict is what lifts an answer into the top band.",
      },
      {
        tip: "Learn the market share formula and give the % sign",
        detail:
          "(Business sales ÷ total market sales) × 100. A bare number without the percentage sign is an incomplete answer.",
      },
      {
        tip: "Use the owner's motives, not just textbook aims",
        detail:
          "Case studies often say the owner wants to spend time with family or keep control. That is a legitimate aim and using it scores far better than reciting 'profit maximisation'.",
      },
    ],
    workedExamples: [
      {
        question:
          "A local bakery sells £180,000 of bread a year. The total market for bread in the town is worth £1.5 million. Calculate its market share.",
        steps: [
          "Write the formula: market share = (business sales ÷ total market sales) × 100.",
          "Substitute the figures: (180,000 ÷ 1,500,000) × 100.",
          "Divide first: 180,000 ÷ 1,500,000 = 0.12.",
          "Multiply by 100 to turn the decimal into a percentage: 0.12 × 100 = 12.",
        ],
        answer: "12% market share",
      },
      {
        question:
          "Rewrite this aim as a SMART objective: 'we want more customers in our café'.",
        steps: [
          "Specific — say exactly what will increase: the number of customers served per week.",
          "Measurable — attach a number: from 400 to 500 per week.",
          "Achievable and Realistic — a 25% rise is a stretch but possible with the new outdoor seating.",
          "Time-bound — give a deadline: by 30 September 2027.",
        ],
        answer:
          "'Increase the number of customers served from 400 to 500 per week by 30 September 2027.'",
      },
    ],
    practice: [
      {
        question: "What does the M in SMART objectives stand for?",
        accept: ["measurable"],
        answer:
          "Measurable. Without a number attached there is no way to tell whether the objective has been met, which is what separates an objective from an aim.",
      },
      {
        question: "What does the T in SMART objectives stand for?",
        accept: ["time-bound", "timebound", "time bound", "timed", "time-related"],
        answer:
          "Time-bound. A target with no deadline can always be postponed, so the date is what makes it real.",
      },
      {
        question: "What is usually the main aim of a brand new business?",
        accept: ["survival", "to survive", "survive"],
        answer:
          "Survival. Most start-ups have little cash behind them, so simply continuing to trade comes before profit or growth. Examiners expect this answer for a start-up case study.",
      },
      {
        question: "A firm sells £250,000 in a market worth £2,000,000. Calculate its market share as a percentage. Give the number only.",
        accept: ["12.5", "12.5%"],
        answer:
          "12.5%. Market share = (250,000 ÷ 2,000,000) × 100 = 0.125 × 100 = 12.5%. Always show the division before the multiplication, and always give the % sign in a written answer.",
      },
      {
        question: "A business sells £60,000 in a market worth £400,000. What is its market share as a percentage? Give the number only.",
        accept: ["15", "15%"],
        answer:
          "15%. (60,000 ÷ 400,000) × 100 = 0.15 × 100 = 15%. Notice that market share can rise even when sales fall, if the whole market is shrinking faster.",
      },
      {
        question: "What is the name for a business whose main purpose is a social or environmental aim?",
        accept: ["social enterprise", "a social enterprise", "socialenterprise"],
        answer:
          "A social enterprise. It still trades and still needs to cover its costs, but most profit is reinvested into the social purpose rather than paid to owners.",
      },
      {
        question: "Putting profit back into the business rather than paying it out to owners is called what?",
        accept: ["reinvestment", "reinvesting", "retained profit", "retainedprofit"],
        answer:
          "Reinvestment. It is the cheapest source of finance a business has, because there is no interest to pay and no ownership to give away.",
      },
      {
        question: "Is 'increase sales' an aim or an objective?",
        accept: ["aim", "an aim"],
        answer:
          "An aim. It states a direction but gives no number and no deadline, so nobody could say whether it had been achieved. Adding both would turn it into an objective.",
      },
      {
        question: "Keeping existing customers so they buy again is known as customer ______.",
        accept: ["retention", "customer retention", "loyalty"],
        answer:
          "Retention. It matters because winning a new customer typically costs several times more than keeping an existing one, so retention protects profit directly.",
      },
      {
        question: "Name one non-financial way of measuring business success.",
        accept: ["customer satisfaction", "staff turnover", "environmental impact", "reviews", "customer retention", "reputation", "staff satisfaction"],
        answer:
          "Customer satisfaction, staff turnover, reputation or environmental impact. These matter because a business can look profitable this year while destroying the loyalty that produces next year's profit.",
      },
      {
        question: "True or false: growing quickly usually increases short-term profit.",
        accept: ["false", "f"],
        answer:
          "False. Growth costs money up front — premises, stock, staff — and the returns arrive later, so short-term profit usually falls. This is a classic example of conflicting objectives.",
      },
      {
        question: "What does the A in SMART objectives stand for?",
        accept: ["achievable"],
        answer:
          "Achievable. An objective nobody believes is possible demotivates staff rather than driving them, so it fails at the one job an objective has.",
      },
      {
        question: "During a recession, which aim often replaces growth?",
        accept: ["survival", "surviving", "to survive"],
        answer:
          "Survival. Aims are not fixed — they change with circumstances, and a recession can turn an ambitious expansion plan back into simply staying open.",
      },
      {
        question: "A shop has 5% market share in a market worth £8,000,000. What are its sales in pounds? Give the number only.",
        accept: ["400000", "400,000"],
        answer:
          "£400,000. Rearranging the formula: sales = market share ÷ 100 × total market = 5 ÷ 100 × 8,000,000 = 400,000. Being able to run the formula backwards is worth practising.",
      },
      {
        question: "Explain why a start-up might set survival as its main aim rather than profit. Write two or three sentences.",
        answer:
          "A new business has no cash reserves, no reputation and no proven customer base, so a few bad months can end it entirely. Prices may need to be low to attract the first customers, which limits profit from the outset. Once it is established and has regular custom, the aim can shift to profit and then to growth — but none of that is possible if it does not survive year one. Mark this one yourself: credit yourself for limited cash, the need to attract first customers, and aims changing over time.",
      },
      {
        question: "A café owner wants both to open three new branches next year and to maximise profit next year. Evaluate whether both aims can be met.",
        answer:
          "Probably not, because these objectives conflict. Opening three branches means paying rent, deposits, fit-out costs, stock and wages before any of them earns anything, so short-term profit will fall even if the expansion is a success. The owner could pursue growth more slowly, open one branch and fund it from retained profit, or accept lower profit this year in exchange for higher profit later. Overall, the sensible judgement is that growth and short-term profit maximisation cannot both be achieved at once, and the owner must decide which matters more. Mark this one yourself: the judgement at the end is where the top-band marks are.",
      },
      {
        question: "Which of these is a FINANCIAL objective?",
        choices: [
          "Increasing profit",
          "Improving customer satisfaction",
          "Reducing environmental impact",
          "Improving staff wellbeing",
        ],
        accept: [
          "Increasing profit",
        ],
        answer: "Profit, revenue, market share and cost reduction are financial. The others are non-financial objectives.",
      },
      {
        question: "Why do many new businesses prioritise SURVIVAL as an objective?",
        choices: [
          "Cash is tight and the failure rate is high in the early years",
          "Profit is illegal at first",
          "Customers prefer small businesses",
          "Banks require it by law",
        ],
        accept: [
          "Cash is tight and the failure rate is high in the early years",
        ],
        answer: "Once established, objectives typically shift towards profit, growth and market share.",
      },
      {
        question: "A SMART objective must be:",
        choices: [
          "Specific, measurable, achievable, relevant and time-bound",
          "Simple, modern, ambitious, realistic and tough",
          "Strategic, managed, accurate, ranked and tested",
          "Short, meaningful, actionable, rated and timed",
        ],
        accept: [
          "Specific, measurable, achievable, relevant and time-bound",
        ],
        answer: "Vague aims cannot be judged. 'Increase sales by 10% within a year' can be; 'do better' cannot.",
      },
      {
        question: "Market share measures:",
        choices: [
          "A business's sales as a proportion of total market sales",
          "The number of shareholders",
          "The value of a company's shares",
          "How many shops a business owns",
        ],
        accept: [
          "A business's sales as a proportion of total market sales",
        ],
        answer: "Growing market share can matter more than short-term profit, because scale brings cost advantages later.",
      },
      {
        question: "Business aims and objectives typically change when:",
        choices: [
          "The business grows or market conditions shift",
          "The logo is redesigned",
          "A new employee joins",
          "The website is updated",
        ],
        accept: [
          "The business grows or market conditions shift",
        ],
        answer: "A recession may push a growing business back towards survival, which is why objectives are reviewed rather than fixed.",
      },
    ],
    misconceptions: [
      {
        wrong: "All businesses aim to maximise profit.",
        right:
          "Many owners deliberately stay small to keep control or protect their own time, and social enterprises put a social purpose first. Case studies usually tell you the owner's real motive — use it.",
      },
      {
        wrong: "An aim and an objective are the same thing.",
        right:
          "An aim is the long-term direction; an objective is the specific, measurable, dated target that gets you there. Exam questions ask for one or the other and the wrong one scores nothing.",
      },
      {
        wrong: "If market share falls, sales must have fallen.",
        right:
          "Not necessarily. Sales can rise while share falls if the whole market grew faster, and share can rise while sales fall if the market shrank faster still. Always check which is being asked about.",
      },
      {
        wrong: "Social objectives are just marketing.",
        right:
          "For a social enterprise the social aim is the legal purpose of the organisation, with profit reinvested into it. Confusing that with a marketing campaign misses what the business is for.",
      },
      {
        wrong: "A good objective is an ambitious one.",
        right:
          "SMART objectives must be achievable and realistic. A target nobody believes is possible demotivates staff instead of driving them, which defeats the purpose entirely.",
      },
    ],
  },

  "business/spotting-a-business-opportunity": {
    summary:
      "Businesses do not start with a product, they start with a gap. This topic is about how that gap is found: understanding what customers actually need and want, watching what competitors are failing to do, and noticing changes in technology, law or fashion that open a door. Get this wrong and everything afterwards — the marketing, the finance, the staff — is spent building something nobody wanted.",
    keyFacts: [
      {
        heading: "Where opportunities come from",
        points: [
          "A gap in the market: a customer need that no existing business is meeting well.",
          "Changes in technology, which create products that were impossible a few years earlier.",
          "Changes in the law, such as new environmental rules creating demand for new services.",
          "Changes in what customers want — fashion, health awareness, convenience, sustainability.",
          "Doing something existing more cheaply, more quickly or more pleasantly than competitors do.",
        ],
      },
      {
        heading: "Understanding customer needs",
        points: [
          "Businesses must know WHO their customer is before deciding what to sell them.",
          "Price, quality, choice and convenience are the four needs customers weigh up most often.",
          "Different customers weigh them differently — which is why a market has room for both Aldi and Waitrose.",
          "Getting this wrong is the commonest reason a well-run business still fails.",
          "Customer needs change over time, so a business that stops listening eventually stops selling.",
        ],
      },
      {
        heading: "Understanding competitors",
        points: [
          "A competitor is any business selling a similar product to the same customers.",
          "Businesses study competitors' price, quality, range, service, location and reputation.",
          "Competing on price means being cheaper; competing on non-price factors means being better in some other way.",
          "Small businesses usually cannot win a price war against large ones, because large firms have lower unit costs.",
          "Differentiation — being noticeably different — is generally a safer strategy for a small firm than being cheapest.",
        ],
      },
      {
        heading: "Risk and the role of research",
        points: [
          "The purpose of research at this stage is to reduce uncertainty before money is committed.",
          "A gap in the market is not automatically a market in the gap: sometimes nobody sells it because nobody wants it.",
          "Testing cheaply first — a market stall, a pop-up, a small online run — limits the loss if the idea is wrong.",
          "Franchising is a lower-risk way in, because the idea has already been proven elsewhere.",
          "No amount of research removes risk entirely; it only makes the decision better informed.",
        ],
      },
    ],
    flashcards: [
      { term: "Business opportunity", definition: "A chance to meet a customer need that is not currently being met well by anyone else." },
      { term: "Gap in the market", definition: "A customer need that existing businesses are not satisfying." },
      { term: "Competitor", definition: "A business selling a similar product or service to the same group of customers." },
      { term: "Competitive advantage", definition: "The feature that lets a business outperform its rivals, such as lower costs or better quality." },
      { term: "Differentiation", definition: "Making a product noticeably different from competitors' so customers choose it for reasons other than price." },
      { term: "Price competition", definition: "Attracting customers by charging less than rivals." },
      { term: "Non-price competition", definition: "Attracting customers through quality, service, branding, design or convenience rather than a lower price." },
      { term: "Customer needs", definition: "What customers require from a product: typically price, quality, choice and convenience." },
      { term: "Market", definition: "The group of customers and businesses buying and selling a particular product." },
      { term: "Demand", definition: "The quantity of a product customers are willing and able to buy at a given price." },
      { term: "Supply", definition: "The quantity of a product businesses are willing to provide at a given price." },
      { term: "Franchise", definition: "A business arrangement where someone pays to trade under an established brand using its proven business model." },
      { term: "Franchisor", definition: "The business that owns the brand and sells the right to use it." },
      { term: "Franchisee", definition: "The person who buys the right to trade under an existing brand." },
      { term: "Product differentiation", definition: "Distinguishing a product from rivals through design, quality, branding or features." },
      { term: "Convenience", definition: "How easy a product is to obtain or use — often what customers pay a premium for." },
    ],
    examTips: [
      {
        tip: "A gap in the market is not always an opportunity",
        detail:
          "Ask whether anyone actually wants it. The strongest answers point out that a gap can exist simply because there is no demand, and that is worth marks on its own.",
      },
      {
        tip: "Split competition into price and non-price",
        detail:
          "Examiners like this structure, and it stops answers becoming a list. Small firms usually compete on non-price factors because they cannot win on cost.",
      },
      {
        tip: "Name the actual competitors from the case study",
        detail:
          "'They face competition' scores little. 'They face competition from the Tesco Express 200 metres away, which can buy stock far more cheaply' scores application marks.",
      },
      {
        tip: "Link customer needs to the specific customer",
        detail:
          "A student buying lunch wants speed and low price; a couple booking an anniversary meal wants quality and atmosphere. Say which customer you mean.",
      },
      {
        tip: "Remember that needs change",
        detail:
          "Opportunities appear because something changed — technology, law, fashion, incomes. Naming the change is usually the point of the question.",
      },
      {
        tip: "Franchising is lower risk, not no risk",
        detail:
          "The model is proven, but the franchisee still pays fees, still loses control, and can still fail if the location is wrong. Balanced answers say so.",
      },
    ],
    practice: [
      {
        question: "What term describes a customer need that no existing business is meeting well?",
        accept: ["gap in the market", "a gap in the market", "gapinthemarket", "market gap"],
        answer:
          "A gap in the market. Be careful though: a gap can exist because nobody wants the product, so spotting one is the beginning of the investigation rather than the end of it.",
      },
      {
        question: "Attracting customers by charging less than rivals is called ______ competition.",
        accept: ["price"],
        answer:
          "Price competition. It is dangerous for small firms because larger competitors buy stock more cheaply and can usually undercut them for longer than the small firm can survive.",
      },
      {
        question: "Competing through quality, service or branding rather than cost is called ______ competition.",
        accept: ["non-price", "nonprice", "non price"],
        answer:
          "Non-price competition. It is usually the safer strategy for a small business, because it competes on things a large rival cannot simply copy by lowering a number.",
      },
      {
        question: "What is the name for the person who buys the right to trade under an established brand?",
        accept: ["franchisee", "the franchisee", "a franchisee"],
        answer:
          "The franchisee. They pay an initial fee plus ongoing royalties to the franchisor in exchange for a proven business model, training and brand recognition.",
      },
      {
        question: "What is the name for the business that owns the brand and sells the right to use it?",
        accept: ["franchisor", "the franchisor", "a franchisor"],
        answer:
          "The franchisor. They gain rapid expansion funded by other people's money, at the cost of some control over how each outlet is run.",
      },
      {
        question: "Making a product noticeably different from rivals' is known as ______.",
        accept: ["differentiation", "product differentiation", "differentiating"],
        answer:
          "Differentiation. It gives customers a reason to choose you other than price, which protects the business from being undercut.",
      },
      {
        question: "The quantity of a product customers are willing and able to buy at a given price is called what?",
        accept: ["demand"],
        answer:
          "Demand. Note the phrase 'willing AND able' — wanting something without the money to buy it does not count as demand in economics.",
      },
      {
        question: "The quantity of a product that businesses are willing to provide at a given price is called what?",
        accept: ["supply"],
        answer:
          "Supply. Where supply and demand meet sets the market price, which is why a shortage pushes prices up and a glut pushes them down.",
      },
      {
        question: "Name one of the four main customer needs businesses compete on.",
        accept: ["price", "quality", "choice", "convenience", "cost", "range", "service"],
        answer:
          "Price, quality, choice or convenience. Different customers rank them differently, which is exactly why one market can support both a discount chain and a luxury brand.",
      },
      {
        question: "True or false: a small shop is usually best advised to compete on price against a supermarket.",
        accept: ["false", "f"],
        answer:
          "False. Supermarkets buy in enormous quantities and have far lower unit costs, so they can undercut a small shop indefinitely. Small firms usually compete on service, specialism or convenience instead.",
      },
      {
        question: "The feature that allows a business to outperform its rivals is called competitive ______.",
        accept: ["advantage", "competitive advantage"],
        answer:
          "Competitive advantage. It has to be something rivals find hard to copy — a location, a skill, a brand — or it disappears as soon as it starts working.",
      },
      {
        question: "Give one change in the outside world that can create a new business opportunity.",
        accept: ["technology", "the law", "law", "legislation", "fashion", "incomes", "tastes", "demographics", "environment", "regulation"],
        answer:
          "Changes in technology, the law, fashion, incomes or population. Almost every new business exists because something changed — naming the change is usually what the question is really asking for.",
      },
      {
        question: "Testing an idea on a market stall before renting a shop is a way of reducing what?",
        accept: ["risk", "the risk", "financial risk"],
        answer:
          "Risk. Committing a small amount first means that if the idea is wrong, the loss is small — this is one of the most practical pieces of advice in the whole course.",
      },
      {
        question: "True or false: research removes the risk of starting a business.",
        accept: ["false", "f"],
        answer:
          "False. Research reduces uncertainty and makes a decision better informed, but customers change their minds, competitors react and economies move. Risk can be managed, never removed.",
      },
      {
        question: "Explain why finding a gap in the market does not guarantee a successful business. Write two or three sentences.",
        answer:
          "A gap may exist simply because there is no demand — other businesses may have tried and withdrawn, or the costs of serving that need may be higher than customers will pay. The business also has to reach those customers, price it correctly and survive the response of competitors once the idea is shown to work. So a gap is a hypothesis to be tested cheaply, not a guarantee. Mark this one yourself: credit yourself for saying a gap may mean no demand, and for mentioning competitor reaction or cost.",
      },
      {
        question: "A new independent coffee shop is opening 100 metres from a Costa. Evaluate how it should compete.",
        answer:
          "It cannot win on price: Costa buys beans and cups in bulk and can absorb a price war far longer than a new independent could. So it should compete on non-price factors — better coffee, a distinctive atmosphere, local sourcing, knowing regulars by name, faster service at peak times, or something Costa's standardised model cannot offer, like hosting local events. It should also target a slightly different customer, such as remote workers wanting somewhere to sit for two hours. Overall, differentiation is the realistic strategy; matching a chain on price would be the fastest route to failure. Mark this one yourself: the top marks are for rejecting price competition WITH a reason, then giving specific alternatives.",
      },
      {
        question: "A GAP IN THE MARKET is:",
        choices: [
          "A customer need not currently being met",
          "A shop that has closed down",
          "A period when sales are low",
          "A price no one will pay",
        ],
        accept: [
          "A customer need not currently being met",
        ],
        answer: "Finding one is only useful if enough customers want it and will pay a price that covers costs.",
      },
      {
        question: "Which is a benefit of understanding customer needs?",
        choices: [
          "Products can be designed that people actually want to buy",
          "Costs are automatically reduced",
          "Competition disappears",
          "Taxes are lower",
        ],
        accept: [
          "Products can be designed that people actually want to buy",
        ],
        answer: "It also improves customer retention and reduces the risk of launching something nobody wants.",
      },
      {
        question: "What is a COMPETITIVE ADVANTAGE?",
        choices: [
          "Something that makes a business more attractive than its rivals",
          "Having the largest premises",
          "Being the oldest business in the area",
          "Employing the most people",
        ],
        accept: [
          "Something that makes a business more attractive than its rivals",
        ],
        answer: "It might be price, quality, location, service or brand — but it must matter to customers to count.",
      },
      {
        question: "Product differentiation means:",
        choices: [
          "Making a product stand out from competitors",
          "Selling several different products",
          "Charging different prices in different shops",
          "Copying a rival's product",
        ],
        accept: [
          "Making a product stand out from competitors",
        ],
        answer: "Differentiation reduces direct price competition, which is why brands invest so heavily in it.",
      },
      {
        question: "Which is an example of a business responding to a market trend?",
        choices: [
          "Launching a plant-based range as demand for it grows",
          "Keeping the same products for decades",
          "Reducing staff training",
          "Ignoring customer feedback",
        ],
        accept: [
          "Launching a plant-based range as demand for it grows",
        ],
        answer: "Trends change what customers want. Businesses that fail to notice lose share to those that do.",
      },
    ],
    misconceptions: [
      {
        wrong: "If there's a gap in the market, there must be money to be made.",
        right:
          "Sometimes nobody sells it because nobody wants it, or because it cannot be produced at a price customers will pay. The gap is a question, not an answer.",
      },
      {
        wrong: "The best way to beat competitors is always to be cheaper.",
        right:
          "For a small business this is usually the worst strategy, because larger rivals have lower unit costs and can outlast you. Differentiation is generally safer.",
      },
      {
        wrong: "Demand just means how much people want something.",
        right:
          "Demand means willing AND able to buy at a given price. Wanting a Ferrari is not demand for a Ferrari unless you can pay for one.",
      },
      {
        wrong: "Buying a franchise means you cannot fail.",
        right:
          "The model is proven, which lowers risk, but franchisees still pay fees and royalties, still have little control, and still fail if the location or management is poor.",
      },
      {
        wrong: "Competitors are only businesses selling exactly the same product.",
        right:
          "A cinema competes with streaming services, bowling alleys and pubs — anything customers might spend the same evening and money on instead.",
      },
    ],
  },

  "business/market-research": {
    summary:
      "Market research is how a business replaces guessing with evidence. It covers what customers want, what they will pay, who else is selling to them, and how big the market actually is. This topic is worth learning precisely because the vocabulary is easy to mix up — primary and secondary, qualitative and quantitative — and examiners test exactly those distinctions.",
    keyFacts: [
      {
        heading: "Primary and secondary research",
        points: [
          "PRIMARY (field) research is new information collected first-hand by the business itself.",
          "Primary methods: questionnaires, surveys, interviews, focus groups, observation, and trialling a product.",
          "SECONDARY (desk) research uses information that already exists, gathered by somebody else.",
          "Secondary sources: government statistics, market reports, competitor websites, news articles, the business's own past sales records.",
          "Primary is specific to your question but slow and expensive; secondary is quick and cheap but may be out of date or collected for a different purpose.",
        ],
      },
      {
        heading: "Qualitative and quantitative data",
        points: [
          "QUANTITATIVE data is numerical — how many, how much, how often.",
          "QUALITATIVE data is about opinions, feelings and reasons — it explains WHY.",
          "Quantitative data is easy to compare and put on a graph, but does not explain the reason behind a number.",
          "Qualitative data explains motivation but is harder to compare and can be influenced by the interviewer.",
          "Most good research uses both: the numbers say what is happening, the words say why.",
        ],
      },
      {
        heading: "Getting reliable results",
        points: [
          "A SAMPLE is the group of people actually asked, chosen to represent the wider population.",
          "Bigger samples are usually more reliable but cost more and take longer.",
          "A biased sample — asking only your friends, or only people in one place — produces confident but wrong conclusions.",
          "Leading questions ('don't you agree our prices are fair?') push respondents towards an answer and ruin the data.",
          "Data can go out of date quickly, especially in fast-moving markets like fashion or technology.",
        ],
      },
      {
        heading: "Using research and technology",
        points: [
          "Research reduces risk by testing an idea before large sums are committed.",
          "It helps set the price, design the product, choose where to advertise and decide how much stock to hold.",
          "Websites and social media provide cheap, fast feedback and detailed data on customer behaviour.",
          "Loyalty cards and online orders let businesses collect data on what individual customers actually buy, not just what they say.",
          "Data protection law limits what can be collected and stored, and how it may be used.",
        ],
      },
    ],
    flashcards: [
      { term: "Market research", definition: "The collection and analysis of information about customers, competitors and the market." },
      { term: "Primary research", definition: "New information collected first-hand by the business for its own specific purpose. Also called field research." },
      { term: "Secondary research", definition: "Information that already exists, collected originally by somebody else. Also called desk research." },
      { term: "Quantitative data", definition: "Numerical data that can be counted and compared, such as how many people bought a product." },
      { term: "Qualitative data", definition: "Data about opinions, feelings and reasons, which explains why customers behave as they do." },
      { term: "Questionnaire", definition: "A set of written questions used to collect information from a sample of people." },
      { term: "Focus group", definition: "A small group discussion led by a researcher to explore opinions in depth." },
      { term: "Observation", definition: "Watching how customers actually behave, rather than asking them what they do." },
      { term: "Sample", definition: "The group of people selected to take part in research, chosen to represent the wider population." },
      { term: "Sample size", definition: "The number of people asked. Larger samples are usually more reliable but cost more." },
      { term: "Bias", definition: "Anything that makes research results unrepresentative, such as a leading question or an unrepresentative sample." },
      { term: "Leading question", definition: "A question worded so that it pushes the respondent towards a particular answer." },
      { term: "Reliability", definition: "How far research results can be trusted to reflect the real market." },
      { term: "Market data", definition: "Information about the size, growth and structure of a market." },
      { term: "Social media analytics", definition: "Data about how people interact with a business online, used as cheap and immediate research." },
      { term: "Data protection", definition: "The legal rules controlling how personal information may be collected, stored and used." },
    ],
    examTips: [
      {
        tip: "Primary and secondary are about WHO collected it",
        detail:
          "Not about whether it is numbers or words. If the business gathered it itself it is primary, however it was done. This single distinction is tested constantly.",
      },
      {
        tip: "Quantitative and qualitative are about WHAT KIND of data",
        detail:
          "Numbers versus opinions. A questionnaire can produce both — 'how many times a week?' is quantitative, 'why do you prefer it?' is qualitative.",
      },
      {
        tip: "Always give a drawback as well as a benefit",
        detail:
          "Primary research is accurate but slow and expensive. Secondary is fast and cheap but may be out of date or gathered for another purpose. Balance earns the marks.",
      },
      {
        tip: "Say what the business would DO with the finding",
        detail:
          "Research is only useful if it changes a decision. 'This would tell them to price at £4.50 rather than £6' is far stronger than 'this would help them understand customers'.",
      },
      {
        tip: "Watch for sample problems in the case study",
        detail:
          "If a business asked 20 people outside its own shop, the sample is small and biased towards existing customers. Spotting that is often the whole question.",
      },
      {
        tip: "Don't say research 'guarantees' anything",
        detail:
          "It reduces risk. Customers change their minds and say one thing while doing another, which is why observation often beats questionnaires.",
      },
    ],
    practice: [
      {
        question: "What type of research collects brand new information first-hand?",
        accept: ["primary", "primary research", "field research", "field"],
        answer:
          "Primary research, also called field research. It is tailored exactly to the business's question, which is its advantage, but it costs time and money, which is its drawback.",
      },
      {
        question: "What type of research uses information that already exists?",
        accept: ["secondary", "secondary research", "desk research", "desk"],
        answer:
          "Secondary research, also called desk research. It is fast and cheap, but was gathered by somebody else for their own purpose and may be out of date.",
      },
      {
        question: "Data in the form of numbers that can be counted is called ______ data.",
        accept: ["quantitative"],
        answer:
          "Quantitative data. It is easy to compare and graph, but on its own it tells you what happened without explaining why.",
      },
      {
        question: "Data about opinions and reasons is called ______ data.",
        accept: ["qualitative"],
        answer:
          "Qualitative data. It explains motivation, which numbers cannot, but it is harder to compare and more easily influenced by how the question was asked.",
      },
      {
        question: "A government statistics website is an example of which type of research?",
        accept: ["secondary", "secondary research", "desk research", "desk"],
        answer:
          "Secondary. The business did not gather it — the government did, for its own purposes. That is what makes it secondary, regardless of how useful or numerical it is.",
      },
      {
        question: "What is the name for the group of people actually asked in a piece of research?",
        accept: ["sample", "the sample", "a sample"],
        answer:
          "The sample. It should represent the wider population; if it does not, the results will be confidently wrong, which is more dangerous than having no research at all.",
      },
      {
        question: "What is the term for a question worded to push someone towards a particular answer?",
        accept: ["leading question", "a leading question", "leadingquestion"],
        answer:
          "A leading question. 'Don't you agree our prices are reasonable?' produces agreement that means nothing, because the question supplied the answer.",
      },
      {
        question: "Watching how customers behave in a shop rather than asking them is which primary method?",
        accept: ["observation", "observing"],
        answer:
          "Observation. It is valuable precisely because people often say one thing and do another — observation records what they actually did.",
      },
      {
        question: "A small guided group discussion about a product is called a focus ______.",
        accept: ["group", "focus group"],
        answer:
          "A focus group. It produces rich qualitative detail about why people feel as they do, but the small numbers mean it cannot tell you how common those views are.",
      },
      {
        question: "True or false: a larger sample is generally more reliable.",
        accept: ["true", "t"],
        answer:
          "True, provided it is still representative. A large but biased sample is not reliable — asking 1,000 of your own customers still tells you nothing about people who shop elsewhere.",
      },
      {
        question: "Give one drawback of secondary research.",
        accept: ["out of date", "outdated", "not specific", "collected for another purpose", "may be biased", "not tailored", "old", "generic"],
        answer:
          "It may be out of date, or it was collected for somebody else's purpose so it does not answer your exact question. Both points are worth marks, and both should be applied to the business in the case study.",
      },
      {
        question: "Give one drawback of primary research.",
        accept: ["expensive", "slow", "time consuming", "costly", "takes time", "cost", "small sample"],
        answer:
          "It is expensive and slow compared with secondary research — a real constraint for a start-up, which is exactly the point examiners want made about small businesses.",
      },
      {
        question: "Which law limits how businesses may collect and store personal information?",
        accept: ["data protection", "data protection law", "gdpr", "uk gdpr", "data protection act"],
        answer:
          "Data protection law (the UK GDPR and Data Protection Act). It matters more every year as businesses collect more customer data through websites and loyalty schemes.",
      },
      {
        question: "A shop asks 15 of its own regular customers whether they like the shop. Name the main problem with this research.",
        accept: ["bias", "biased sample", "biased", "unrepresentative", "small sample", "sample bias"],
        answer:
          "Bias, from an unrepresentative sample. Regular customers already like the shop, so the results will be positive regardless of what everyone else thinks — and the sample is far too small as well.",
      },
      {
        question: "Explain why a business might use both quantitative and qualitative research. Write two or three sentences.",
        answer:
          "Quantitative data shows what is happening and how widespread it is — for example that sales fell 20% among under-25s — but it cannot say why. Qualitative research through interviews or focus groups explains the reason, such as the packaging looking dated. Used together, the numbers identify the problem and the opinions explain it, which is what a business needs before it can act. Mark this one yourself: credit yourself for saying numbers show WHAT and opinions show WHY, with an example.",
      },
      {
        question: "A start-up has £300 to spend on research. Evaluate whether it should use primary or secondary research.",
        answer:
          "With £300 it cannot afford much primary research: a professional survey or focus group would use the whole budget on a small sample. Secondary research is nearly free — government statistics, competitor websites and industry reports — so it should start there to size the market and see what rivals charge. But secondary data will not tell it whether local customers want THIS product, so a small amount of cheap primary research such as an online questionnaire or observation outside a competitor's shop is worth doing too. Overall, secondary first for context, then targeted low-cost primary to answer the specific question. Mark this one yourself: full marks need a recommendation, not just a list of both types.",
      },
      {
        question: "Which of these is PRIMARY market research?",
        choices: [
          "A survey the business carries out itself",
          "A government statistics report",
          "A competitor's published accounts",
          "A newspaper article",
        ],
        accept: [
          "A survey the business carries out itself",
        ],
        answer: "Primary data is collected first-hand for a specific purpose. Secondary data already exists and was gathered by someone else.",
      },
      {
        question: "An advantage of SECONDARY research is that it is:",
        choices: [
          "Cheaper and quicker to obtain",
          "Always more up to date",
          "Specific to the business's exact question",
          "Never biased",
        ],
        accept: [
          "Cheaper and quicker to obtain",
        ],
        answer: "The drawback is that it was collected for someone else's purpose, so it may be out of date or not quite relevant.",
      },
      {
        question: "QUALITATIVE data is best described as:",
        choices: [
          "Opinions and reasons, expressed in words",
          "Numbers that can be counted",
          "Data from a government source",
          "Data from a competitor",
        ],
        accept: [
          "Opinions and reasons, expressed in words",
        ],
        answer: "Quantitative data is numerical and easy to compare; qualitative explains WHY, which numbers alone cannot.",
      },
      {
        question: "A focus group is useful because it:",
        choices: [
          "Explores customer opinions in depth",
          "Produces a large statistical sample",
          "Costs nothing to run",
          "Removes all bias",
        ],
        accept: [
          "Explores customer opinions in depth",
        ],
        answer: "The sample is small, so results may not represent the whole market, and a dominant voice can sway the group.",
      },
      {
        question: "A biased sample is a problem because:",
        choices: [
          "The results may not represent the target market",
          "It takes longer to collect",
          "It always costs more",
          "It cannot be written down",
        ],
        accept: [
          "The results may not represent the target market",
        ],
        answer: "Surveying only existing customers, for example, tells you nothing about why other people do not buy.",
      },
    ],
    misconceptions: [
      {
        wrong: "Primary research means numbers and secondary means opinions.",
        right:
          "Primary and secondary are about WHO collected the data. Quantitative and qualitative are about what kind it is. A questionnaire you run yourself is primary and can be either.",
      },
      {
        wrong: "More research always means a better decision.",
        right:
          "Research costs money and time that a start-up may not have, and badly designed research produces confident nonsense. A small, well-designed study beats a large, biased one.",
      },
      {
        wrong: "If customers say they'd buy it, they will.",
        right:
          "People routinely say one thing and do another, especially when asked about spending money. This is why observation and trial sales are more trustworthy than questionnaires.",
      },
      {
        wrong: "A big sample makes research reliable.",
        right:
          "Only if it is representative. Asking 1,000 of your own loyal customers tells you nothing about the people who chose a competitor, however large the number.",
      },
    ],
  },

  "business/market-segmentation": {
    summary:
      "No business can sell to everybody, and the ones that try usually appeal to nobody in particular. Segmentation is the process of splitting a market into groups of customers who share something — age, income, lifestyle, location — so that a business can aim precisely at one of them. Market mapping is the diagram that shows where every competitor sits, and where the empty space might be.",
    keyFacts: [
      {
        heading: "Ways to segment a market",
        points: [
          "By AGE — products aimed at children, teenagers, families or retired people.",
          "By INCOME — budget, mid-range and luxury versions of the same product.",
          "By GENDER — though this is used far less than it once was, and can be a weakness rather than a strength.",
          "By LOCATION — urban or rural, region, or country.",
          "By LIFESTYLE AND INTERESTS — vegan food, gaming, fitness, sustainability.",
        ],
      },
      {
        heading: "Why segment at all",
        points: [
          "It lets a business design a product that fits one group extremely well rather than everyone badly.",
          "Advertising can be aimed where that group actually is, which wastes far less money.",
          "Prices can be set to what that specific group will pay.",
          "It helps a small business avoid competing head-on with large firms serving the mass market.",
          "The risk is becoming too narrow: a segment can be too small to be profitable.",
        ],
      },
      {
        heading: "Market mapping",
        points: [
          "A market map is a diagram with two axes, each showing a feature customers care about — typically price and quality.",
          "Every competitor is plotted according to where they sit on both.",
          "A cluster shows a crowded part of the market where competition is fierce.",
          "An empty space may show a gap — or may show a combination nobody wants, such as low quality at a high price.",
          "It is a starting point for investigation, not proof that an opportunity exists.",
        ],
      },
      {
        heading: "Target market and market size",
        points: [
          "The TARGET MARKET is the specific group a business aims its product at.",
          "MASS MARKETING aims at everybody; NICHE MARKETING aims at one small, specific segment.",
          "Niche markets face less competition and can charge more, but have fewer customers and more risk if tastes change.",
          "Mass markets have huge sales potential but intense competition and lower prices.",
          "Market size can be measured by volume (units sold) or by value (total money spent).",
        ],
      },
    ],
    flashcards: [
      { term: "Market segmentation", definition: "Dividing a market into groups of customers who share similar characteristics." },
      { term: "Market segment", definition: "One group of customers within a market who share a characteristic such as age or income." },
      { term: "Target market", definition: "The specific group of customers a business aims its product at." },
      { term: "Market map", definition: "A diagram plotting competitors against two features customers care about, such as price and quality." },
      { term: "Niche market", definition: "A small, specific segment of a larger market with particular needs." },
      { term: "Mass market", definition: "A large market where a product is aimed at most consumers rather than a specific group." },
      { term: "Demographic segmentation", definition: "Dividing a market by measurable population characteristics such as age, gender or income." },
      { term: "Geographic segmentation", definition: "Dividing a market by location, such as region, country, or urban versus rural." },
      { term: "Lifestyle segmentation", definition: "Dividing a market by how customers live and what they value, such as fitness or sustainability." },
      { term: "Market size", definition: "The total value or volume of sales in a market." },
      { term: "Market volume", definition: "The number of units sold in a market." },
      { term: "Market value", definition: "The total amount of money spent in a market." },
      { term: "Market growth", definition: "The rate at which the size of a market is increasing, usually as a percentage." },
      { term: "Product range", definition: "The set of different products a business sells, often aimed at different segments." },
      { term: "Brand positioning", definition: "Where a brand sits in customers' minds relative to competitors, such as premium or budget." },
      { term: "Customer profile", definition: "A description of the typical customer in a target market, covering age, income, interests and habits." },
    ],
    examTips: [
      {
        tip: "Name the segment specifically",
        detail:
          "'Young people' is vague. '16-24 year old students living in the city centre on a low budget' is a customer profile, and it is what the marks are for.",
      },
      {
        tip: "On a market map, say what the axes are",
        detail:
          "Usually price (low to high) and quality (low to high). An answer describing a gap without naming the axes cannot be credited properly.",
      },
      {
        tip: "An empty space is not automatically an opportunity",
        detail:
          "Nobody sells low-quality products at high prices because nobody would buy them. The best answers question the gap rather than assuming it.",
      },
      {
        tip: "Balance niche against mass",
        detail:
          "Niche: less competition, higher prices, fewer customers, more risk. Mass: more customers, more competition, lower margins. Say which suits the business and why.",
      },
      {
        tip: "Link segmentation to a decision",
        detail:
          "Segmenting matters because it changes where you advertise, what you charge and what you make. Say which one, for the business in the question.",
      },
      {
        tip: "Know volume versus value",
        detail:
          "Volume is units; value is pounds. A market can grow in volume while falling in value if prices are dropping — a favourite examiner trap.",
      },
    ],
    practice: [
      {
        question: "Dividing a market into groups of customers with similar characteristics is called market ______.",
        accept: ["segmentation", "segmenting", "market segmentation"],
        answer:
          "Market segmentation. The point is to aim precisely at one group rather than vaguely at everyone, which nearly always produces a better product and cheaper advertising.",
      },
      {
        question: "What is the term for the specific group of customers a business aims its product at?",
        accept: ["target market", "the target market", "targetmarket"],
        answer:
          "The target market. Naming it precisely — age, income, location, interests — is what turns a vague answer into one that earns application marks.",
      },
      {
        question: "A small, specialised segment of a larger market is called a ______ market.",
        accept: ["niche"],
        answer:
          "A niche market. Fewer competitors and higher prices are the attraction; a small customer base and vulnerability to changing tastes are the risks.",
      },
      {
        question: "A market where a product is aimed at most consumers is called a ______ market.",
        accept: ["mass"],
        answer:
          "A mass market. Huge potential sales, but intense competition from large firms with lower unit costs, which usually pushes prices and margins down.",
      },
      {
        question: "Segmenting customers by age or income is which type of segmentation?",
        accept: ["demographic", "demographics", "demographic segmentation"],
        answer:
          "Demographic segmentation. It uses measurable population characteristics, which makes it easy to research and easy to target with advertising.",
      },
      {
        question: "Segmenting customers by where they live is which type of segmentation?",
        accept: ["geographic", "geographical", "geographic segmentation", "location"],
        answer:
          "Geographic segmentation. It matters for products where local taste, climate or convenience varies — which is far more products than people expect.",
      },
      {
        question: "What two features are most commonly used as the axes of a market map?",
        accept: ["price and quality", "quality and price", "price, quality", "priceandquality"],
        answer:
          "Price and quality. Any two features customers care about can be used, but these two are the standard pair and the ones exam questions usually expect.",
      },
      {
        question: "On a market map, a group of competitors bunched close together shows what?",
        accept: ["a crowded market", "high competition", "competition", "crowded", "lots of competition", "a cluster"],
        answer:
          "A crowded, highly competitive part of the market. Entering there means fighting established firms directly, which is usually bad news for a start-up.",
      },
      {
        question: "The number of units sold in a market is called market ______.",
        accept: ["volume"],
        answer:
          "Market volume. Compare it with market value, which is the total money spent — the two can move in opposite directions when prices change.",
      },
      {
        question: "The total amount of money spent in a market is called market ______.",
        accept: ["value"],
        answer:
          "Market value. A market can sell more units while being worth less, if prices have fallen — a distinction examiners like to test.",
      },
      {
        question: "True or false: an empty space on a market map is always a business opportunity.",
        accept: ["false", "f"],
        answer:
          "False. Some combinations are empty because nobody wants them — low quality at a high price, for instance. The gap is a question to investigate, not an answer.",
      },
      {
        question: "A description of the typical customer including age, income and interests is called a customer ______.",
        accept: ["profile", "customer profile"],
        answer:
          "A customer profile. Writing one forces a business to be specific, and specific answers about customers are what separate top-band responses from vague ones.",
      },
      {
        question: "Name one benefit of segmenting a market.",
        accept: ["less wasted advertising", "better product", "higher prices", "less competition", "targeted advertising", "meets needs better", "cheaper advertising", "focus"],
        answer:
          "Advertising can be aimed only where the group actually is, so less money is wasted; the product fits that group better; and prices can be set to what they will pay.",
      },
      {
        question: "Give one risk of targeting a very narrow segment.",
        accept: ["too small", "too few customers", "not profitable", "tastes change", "risky", "limited growth", "small market"],
        answer:
          "The segment may be too small to be profitable, or its tastes may change and leave the business with nothing else to sell. Concentration is efficient and fragile at the same time.",
      },
      {
        question: "Explain why a small business might target a niche rather than the mass market. Write two or three sentences.",
        answer:
          "A small business cannot match the unit costs or advertising budgets of large firms, so competing in the mass market means losing on price and visibility. A niche has fewer competitors, and customers with specific needs will often pay more for something that fits them exactly. It also lets a limited marketing budget be spent where it will actually reach the right people. Mark this one yourself: credit yourself for mentioning lower competition, higher prices, and efficient use of a small budget.",
      },
      {
        question: "A new sportswear brand plots a market map and finds a gap at high quality and low price. Evaluate whether it should enter there.",
        answer:
          "It should be suspicious rather than excited. High quality at a low price usually means low or negative margins — the space may be empty precisely because it is not profitable, not because nobody thought of it. Established firms with far lower unit costs would also be better placed to occupy it and could undercut a newcomer. If the business genuinely has a cost advantage, such as direct-to-consumer selling with no shops to pay for, the position might be defensible. Overall it should investigate WHY the space is empty before committing, and a high-quality, higher-price niche is likely to be safer. Mark this one yourself: the key insight is asking why the gap exists — say that and you are in the top band.",
      },
      {
        question: "Market segmentation means:",
        choices: [
          "Dividing customers into groups with similar characteristics",
          "Selling in several countries",
          "Splitting a business into departments",
          "Reducing the product range",
        ],
        accept: [
          "Dividing customers into groups with similar characteristics",
        ],
        answer: "It allows marketing to be targeted, which is cheaper and more effective than treating everyone the same.",
      },
      {
        question: "Which is an example of DEMOGRAPHIC segmentation?",
        choices: [
          "Age",
          "Location",
          "Lifestyle",
          "Frequency of purchase",
        ],
        accept: [
          "Age",
        ],
        answer: "Demographic covers age, gender, income and occupation. Location is geographic and lifestyle is psychographic.",
      },
      {
        question: "A market MAP is used to:",
        choices: [
          "Show where products sit against two features, revealing gaps",
          "Show where customers live",
          "Track daily sales",
          "List all competitors' prices",
        ],
        accept: [
          "Show where products sit against two features, revealing gaps",
        ],
        answer: "Typical axes are price and quality. An empty area may be a gap — or a space where nobody wants to buy.",
      },
      {
        question: "A NICHE market is one that is:",
        choices: [
          "Small and specialised",
          "Very large and general",
          "Only found online",
          "Free from competition permanently",
        ],
        accept: [
          "Small and specialised",
        ],
        answer: "Niches face less competition and allow premium prices, but sales volumes are limited and the business is vulnerable if demand shifts.",
      },
      {
        question: "The main benefit of targeting a specific segment is:",
        choices: [
          "Marketing spend is less wasted on uninterested people",
          "Costs of production always fall",
          "Competitors are forced to leave",
          "No research is needed",
        ],
        accept: [
          "Marketing spend is less wasted on uninterested people",
        ],
        answer: "Targeting also lets the product and price be tailored more precisely to what that group values.",
      },
    ],
    misconceptions: [
      {
        wrong: "Segmenting a market means selling to fewer people, so it reduces sales.",
        right:
          "It usually increases them. A product designed precisely for one group sells far better to that group than a compromise product designed for everybody.",
      },
      {
        wrong: "A gap on a market map is always worth filling.",
        right:
          "Empty spaces are often empty because the combination is unprofitable or unwanted. Ask why nobody is there before assuming you have spotted something clever.",
      },
      {
        wrong: "Market size and market share mean the same thing.",
        right:
          "Market size is how big the whole market is; market share is the slice one business has of it. A tiny share of a huge market can be worth more than a large share of a small one.",
      },
      {
        wrong: "Niche markets are safer because there is less competition.",
        right:
          "Less competition, but far fewer customers and no fallback if tastes change. Niche is a different risk profile, not a lower one.",
      },
    ],
  },

  "business/business-ownership": {
    summary:
      "The legal form a business takes decides who owns it, who controls it, who keeps the profit, and — most importantly — who pays if it all goes wrong. That last point is the one worth understanding properly: the difference between limited and unlimited liability is the difference between losing your investment and losing your house.",
    keyFacts: [
      {
        heading: "Unincorporated businesses",
        points: [
          "A SOLE TRADER is one person owning the business. Easy and cheap to set up, keeps all the profit, makes all the decisions.",
          "Sole traders have UNLIMITED LIABILITY: the owner and the business are the same legal thing, so personal possessions can be taken to pay business debts.",
          "A PARTNERSHIP has two or more owners sharing capital, decisions, profits and workload.",
          "Ordinary partnerships also have unlimited liability, and each partner can be liable for debts run up by the others.",
          "A deed of partnership sets out how profits and responsibilities are divided; without one the law assumes everything is equal.",
        ],
      },
      {
        heading: "Incorporated businesses",
        points: [
          "A PRIVATE LIMITED COMPANY (Ltd) is a separate legal entity from its owners, who are called shareholders.",
          "Incorporation gives LIMITED LIABILITY: shareholders can lose only the money they invested, not their personal assets.",
          "Ltd shares can only be sold privately, with the agreement of the other shareholders.",
          "A PUBLIC LIMITED COMPANY (plc) can sell shares to the public on a stock exchange, raising far more money.",
          "Companies must register with Companies House and publish annual accounts, so their finances are visible to competitors.",
        ],
      },
      {
        heading: "Franchises and other forms",
        points: [
          "A FRANCHISE lets someone trade under an established brand using its proven model, in exchange for a fee and ongoing royalties.",
          "Franchisees get a known brand, training and support, so failure rates are lower — but they pay for it and have little freedom.",
          "A SOCIAL ENTERPRISE trades like any business but exists to achieve a social or environmental purpose.",
          "Not-for-profit organisations and charities reinvest any surplus rather than distributing it to owners.",
          "The right choice depends on how much money is needed, how much risk the owner can bear, and how much control they want to keep.",
        ],
      },
      {
        heading: "Weighing up the choice",
        points: [
          "Setting up: sole trader is quickest and cheapest; a company involves registration, paperwork and accounting costs.",
          "Raising money: companies find it far easier, because they can sell shares and lenders prefer their structure.",
          "Control: a sole trader answers to nobody; shareholders can outvote a founder.",
          "Privacy: sole traders keep their finances private; companies must publish accounts.",
          "Liability is usually the deciding factor once real money is at stake.",
        ],
      },
    ],
    flashcards: [
      { term: "Sole trader", definition: "A business owned and controlled by one person, who keeps all profit and has unlimited liability." },
      { term: "Partnership", definition: "A business owned by two or more people who share the capital, decisions, profits and risks." },
      { term: "Deed of partnership", definition: "A legal document setting out how partners share profits, responsibilities and decisions." },
      { term: "Unlimited liability", definition: "The owner is personally responsible for all business debts, so personal possessions are at risk." },
      { term: "Limited liability", definition: "Owners can lose only the money they invested; their personal assets are protected from business debts." },
      { term: "Private limited company (Ltd)", definition: "An incorporated business whose shares are sold privately and whose owners have limited liability." },
      { term: "Public limited company (plc)", definition: "An incorporated business that can sell shares to the public on a stock exchange." },
      { term: "Shareholder", definition: "A person who owns shares in a company and therefore owns part of it." },
      { term: "Dividend", definition: "A share of a company's profit paid to shareholders." },
      { term: "Incorporation", definition: "The process of making a business a separate legal entity from its owners." },
      { term: "Companies House", definition: "The UK government body that registers companies and publishes their annual accounts." },
      { term: "Franchise", definition: "An arrangement where one business pays to trade under another's brand and business model." },
      { term: "Royalty", definition: "An ongoing payment made by a franchisee to the franchisor, usually a percentage of sales." },
      { term: "Social enterprise", definition: "A business whose main aim is social or environmental, with most profit reinvested into that purpose." },
      { term: "Not-for-profit", definition: "An organisation that reinvests any surplus rather than paying it out to owners." },
      { term: "Legal structure", definition: "The legal form a business takes, which determines ownership, control and liability." },
    ],
    examTips: [
      {
        tip: "Liability is the single most examined idea here",
        detail:
          "Unlimited means personal possessions are at risk; limited means only the investment is. Say which one applies and what it means for the specific owner in the question.",
      },
      {
        tip: "Don't say a sole trader works alone",
        detail:
          "A sole trader is one OWNER. They can employ fifty staff. This is one of the most common errors in the whole subject.",
      },
      {
        tip: "Ltd and plc are not the same",
        detail:
          "Ltd sells shares privately; plc sells them to the public on a stock exchange. Only a plc can be bought by anyone with a trading app.",
      },
      {
        tip: "Give a drawback of incorporating too",
        detail:
          "Limited liability is not free: there is paperwork, accounting cost, public accounts and possible loss of control. Balance is what lifts the mark.",
      },
      {
        tip: "Match the structure to the owner's situation",
        detail:
          "A window cleaner starting alone does not need a plc. Recommend a form and justify it using the details given about money, risk and ambition.",
      },
      {
        tip: "Watch for the control trade-off",
        detail:
          "Selling shares raises money but gives away ownership and votes. Founders losing control of their own company is a favourite exam scenario.",
      },
    ],
    practice: [
      {
        question: "What is the name for a business owned and controlled by one person?",
        accept: ["sole trader", "a sole trader", "soletrader", "sole proprietor"],
        answer:
          "A sole trader. Note this means one OWNER, not one worker — a sole trader can employ staff, which is the commonest misunderstanding in this topic.",
      },
      {
        question: "What type of liability means an owner's personal possessions can be taken to pay business debts?",
        accept: ["unlimited liability", "unlimited"],
        answer:
          "Unlimited liability. The owner and the business are the same legal person, so there is no line between business debts and personal ones — the house is genuinely at risk.",
      },
      {
        question: "What type of liability means owners can lose only the money they invested?",
        accept: ["limited liability", "limited"],
        answer:
          "Limited liability. It exists because the company is a separate legal person from its shareholders, which is the whole point of incorporating.",
      },
      {
        question: "What do the letters Ltd stand for in a company name?",
        accept: ["limited", "private limited company", "limited company"],
        answer:
          "Limited — short for private limited company. It signals limited liability, which is legally required to be displayed so that anyone trading with it knows.",
      },
      {
        question: "Which type of company can sell its shares to the general public on a stock exchange?",
        accept: ["plc", "public limited company", "a plc", "public limited"],
        answer:
          "A plc — public limited company. This raises far more money than a private sale, at the cost of losing control and having to publish detailed accounts.",
      },
      {
        question: "What is a share of company profit paid to shareholders called?",
        accept: ["dividend", "a dividend", "dividends"],
        answer:
          "A dividend. It is the reward for investing, and the company chooses each year how much profit to pay out and how much to reinvest.",
      },
      {
        question: "What is the legal document setting out how partners share profits and responsibilities?",
        accept: ["deed of partnership", "a deed of partnership", "partnership agreement", "deedofpartnership"],
        answer:
          "A deed of partnership. Without one the law assumes everything is shared equally, which causes serious arguments when one partner has done most of the work.",
      },
      {
        question: "What is the name of the UK body that companies must register with?",
        accept: ["companies house", "companieshouse"],
        answer:
          "Companies House. It also publishes annual accounts, which is why competitors can see a limited company's finances but not a sole trader's.",
      },
      {
        question: "The ongoing percentage-of-sales payment a franchisee makes to a franchisor is called a ______.",
        accept: ["royalty", "royalties", "a royalty"],
        answer:
          "A royalty. It is charged on top of the initial franchise fee, and it continues for as long as the franchisee trades under the brand.",
      },
      {
        question: "The process of making a business a separate legal entity from its owners is called ______.",
        accept: ["incorporation", "incorporating"],
        answer:
          "Incorporation. It is the step that creates limited liability, because it makes the company a legal person in its own right, separate from whoever owns it.",
      },
      {
        question: "True or false: a sole trader cannot employ any staff.",
        accept: ["false", "f"],
        answer:
          "False. Sole trader describes the OWNERSHIP — one owner — not the number of workers. A sole trader can employ dozens of people.",
      },
      {
        question: "Which ownership type usually finds it easiest to raise large sums of money?",
        accept: ["plc", "public limited company", "a plc", "public limited"],
        answer:
          "A plc, because it can sell shares to the public on a stock exchange. That access to capital is the main reason large businesses take this form.",
      },
      {
        question: "Give one drawback of becoming a private limited company.",
        accept: ["paperwork", "cost", "accounts are public", "public accounts", "loss of control", "less privacy", "administration", "legal costs", "more complex"],
        answer:
          "The paperwork and accounting costs, the loss of privacy because accounts must be published, and the possibility of losing control if shares are sold to others.",
      },
      {
        question: "Which ownership form keeps its financial details private from competitors?",
        accept: ["sole trader", "sole traders", "partnership", "unincorporated", "soletrader"],
        answer:
          "Sole traders and ordinary partnerships. They are unincorporated, so they do not file public accounts — a genuine advantage that is easy to forget when listing drawbacks.",
      },
      {
        question: "Explain why limited liability makes it easier for a company to attract investors. Write two or three sentences.",
        answer:
          "An investor in a limited company knows the maximum they can lose is the amount they put in, because their personal assets are protected by the company being a separate legal person. That makes the decision to invest far less frightening, especially for people with savings or property to protect. Without limited liability, very few people would risk buying shares in a business they do not personally control. Mark this one yourself: credit yourself for naming the capped loss AND linking it to willingness to invest.",
      },
      {
        question: "A sole trader running a growing building firm is considering becoming a private limited company. Evaluate whether she should.",
        answer:
          "The strongest argument for is liability. Building work carries real risk of expensive claims, and as a sole trader her house and savings are exposed to any debt or lawsuit; incorporating caps her loss at what she invested. It would also make borrowing easier and may look more credible to larger clients. Against: registration, annual accounts and an accountant cost money and time, her finances become public for competitors to read, and if she sells shares to raise money she gives away control of a business she built. Overall, given the level of risk in construction, the liability protection probably outweighs the extra administration — but she should keep the shares herself so she does not trade one problem for another. Mark this one yourself: the judgement must weigh liability against cost and control, not just list both.",
      },
      {
        question: "What does UNLIMITED LIABILITY mean?",
        choices: [
          "The owner is personally responsible for the business's debts",
          "The business can borrow any amount",
          "There is no limit on profits",
          "The business never pays tax",
        ],
        accept: [
          "The owner is personally responsible for the business's debts",
        ],
        answer: "Sole traders and ordinary partnerships have it, so personal assets are at risk. Limited companies do not.",
      },
      {
        question: "Which form of ownership has a separate legal identity from its owners?",
        choices: [
          "A private limited company",
          "A sole trader",
          "An ordinary partnership",
          "A market stall",
        ],
        accept: [
          "A private limited company",
        ],
        answer: "Separate legal identity is what creates limited liability — the company owes the debts, not the shareholders personally.",
      },
      {
        question: "An advantage of being a SOLE TRADER is:",
        choices: [
          "Full control and keeping all the profit",
          "Limited liability",
          "Easy access to large amounts of capital",
          "Shared responsibility",
        ],
        accept: [
          "Full control and keeping all the profit",
        ],
        answer: "The trade-offs are unlimited liability, difficulty raising finance, and no one to share the workload.",
      },
      {
        question: "Shares in a PUBLIC limited company can be:",
        choices: [
          "Sold to the general public on the stock exchange",
          "Sold only to family",
          "Never sold once issued",
          "Sold only to employees",
        ],
        accept: [
          "Sold to the general public on the stock exchange",
        ],
        answer: "That raises large sums but means losing some control, and the accounts must be published.",
      },
      {
        question: "A franchise arrangement means the franchisee:",
        choices: [
          "Pays to trade under an established brand's name and system",
          "Owns the brand outright",
          "Has no ongoing costs",
          "Can change the product freely",
        ],
        accept: [
          "Pays to trade under an established brand's name and system",
        ],
        answer: "Lower risk and instant recognition, but ongoing fees and very little freedom over how the business runs.",
      },
    ],
    misconceptions: [
      {
        wrong: "A sole trader is someone who works on their own.",
        right:
          "It means one OWNER. A sole trader can employ any number of staff. This single error costs marks every year.",
      },
      {
        wrong: "Limited liability means the business has limited debts.",
        right:
          "The business can owe as much as it likes. What is limited is how much the OWNERS can be forced to pay — no more than they invested.",
      },
      {
        wrong: "Ltd and plc are just different names for the same thing.",
        right:
          "An Ltd sells shares privately with the other owners' agreement; a plc sells them to the public on a stock exchange. The difference is who can buy in.",
      },
      {
        wrong: "Becoming a limited company is always the better choice.",
        right:
          "It brings paperwork, accountancy fees, public accounts and possible loss of control. For a small, low-risk business, staying a sole trader is often the sensible answer.",
      },
      {
        wrong: "Partners always share profits equally.",
        right:
          "They share them however the deed of partnership says. Equal shares are only the legal default when no deed exists — which is exactly why deeds are written.",
      },
    ],
  },

  "business/business-location": {
    summary:
      "Where a business sits decides who walks past it, what it costs to run, and how easily it can get supplies and staff. For a shop, location can matter more than almost anything else; for an online business it may barely matter at all. This topic is about the factors that pull a business towards one place and the trade-offs that come with each.",
    keyFacts: [
      {
        heading: "Factors affecting location",
        points: [
          "PROXIMITY TO CUSTOMERS — vital for shops, cafés and hairdressers, where passing trade is the business.",
          "PROXIMITY TO MATERIALS — matters when raw materials are heavy, bulky or perishable and expensive to move.",
          "PROXIMITY TO LABOUR — a business needing skilled staff must locate where those people are.",
          "PROXIMITY TO COMPETITORS — sometimes avoided, sometimes deliberately sought, because clusters attract customers.",
          "COST OF THE SITE — rent, business rates and the price of land, which usually rise with how good the location is.",
        ],
      },
      {
        heading: "The internet changes the question",
        points: [
          "E-commerce means many businesses no longer need a location their customers can reach at all.",
          "An online business can locate where costs are LOW rather than where footfall is high.",
          "It still needs good transport links for deliveries and reliable internet infrastructure.",
          "Online selling widens the possible market from one town to the whole country or beyond.",
          "But it increases competition too: the business is now competing with everyone, not just the shops nearby.",
        ],
      },
      {
        heading: "Costs and trade-offs",
        points: [
          "The best-located sites cost the most, so location is nearly always a trade-off against rent.",
          "A cheaper site out of town may need more spending on advertising to bring customers in.",
          "Fixed costs like rent must be paid whether or not anything sells, so a high rent raises the break-even point.",
          "Government grants and enterprise zones can make particular areas cheaper to move into.",
          "Moving later is expensive and disruptive, so the decision is hard to reverse.",
        ],
      },
      {
        heading: "Types of location",
        points: [
          "High street — high footfall, high rent, good for impulse purchases.",
          "Retail park or out of town — cheaper space and parking, but customers must choose to travel there.",
          "Industrial estate — cheap, well connected for lorries, no passing customers, suited to production or storage.",
          "Home-based — almost no cost, ideal for a start-up, but limited space and no separation of work and home.",
          "Online only — lowest premises cost, widest reach, highest competition.",
        ],
      },
    ],
    flashcards: [
      { term: "Location", definition: "The place a business chooses to operate from, affecting its costs, customers and access to supplies." },
      { term: "Footfall", definition: "The number of people passing a location, which affects potential customers for a shop." },
      { term: "Proximity", definition: "Nearness to something important such as customers, materials, labour or competitors." },
      { term: "E-commerce", definition: "Buying and selling goods or services over the internet." },
      { term: "Business rates", definition: "A tax paid on business premises to the local council." },
      { term: "Rent", definition: "The regular payment made to use premises owned by somebody else." },
      { term: "Fixed cost", definition: "A cost that does not change with output, such as rent, which must be paid even if nothing sells." },
      { term: "Infrastructure", definition: "The transport, power and communication networks a business relies on." },
      { term: "Retail park", definition: "An out-of-town shopping area with cheaper space and free parking, away from the high street." },
      { term: "Industrial estate", definition: "An area set aside for manufacturing and storage, with good transport links and low rents." },
      { term: "Enterprise zone", definition: "An area where the government offers reduced taxes or grants to encourage businesses to locate there." },
      { term: "Government grant", definition: "Money given by government to a business, usually for a specific purpose and not repaid." },
      { term: "Passing trade", definition: "Customers who buy because they happened to be walking past, rather than planning to visit." },
      { term: "Distribution", definition: "Getting a finished product from the business to the customer." },
      { term: "Cluster", definition: "A group of similar businesses located close together, which can attract more customers overall." },
      { term: "Home-based business", definition: "A business run from the owner's home, minimising premises costs." },
    ],
    examTips: [
      {
        tip: "The right answer depends on the TYPE of business",
        detail:
          "A café needs footfall; a web designer does not. Always start by asking what this particular business actually needs from a location.",
      },
      {
        tip: "Link location to fixed costs and break-even",
        detail:
          "High rent is a fixed cost, so it raises the break-even output. Connecting the two topics is exactly the kind of link that earns analysis marks.",
      },
      {
        tip: "Remember clustering can be a good thing",
        detail:
          "Restaurants gather in the same street because customers go there to choose. Assuming competitors must always be avoided is a common mistake.",
      },
      {
        tip: "Online is not automatically cheaper overall",
        detail:
          "You save on rent but pay for the website, delivery, returns and digital advertising — and compete nationally instead of locally.",
      },
      {
        tip: "Say what the business gives up",
        detail:
          "A cheaper site usually costs more in advertising or lost passing trade. Naming the trade-off is worth more than listing advantages.",
      },
      {
        tip: "Location decisions are hard to undo",
        detail:
          "Leases run for years and moving is expensive. That permanence is a legitimate evaluation point in favour of caution.",
      },
    ],
    practice: [
      {
        question: "What word describes the number of people passing a particular location?",
        accept: ["footfall"],
        answer:
          "Footfall. It matters most for businesses relying on passing trade, such as shops and cafés, and it is the main thing high street rents are actually charging for.",
      },
      {
        question: "Buying and selling over the internet is called ______.",
        accept: ["e-commerce", "ecommerce", "e commerce", "online selling"],
        answer:
          "E-commerce. It weakens the link between location and customers, letting a business locate where costs are low rather than where people walk past.",
      },
      {
        question: "What tax is paid on business premises to the local council?",
        accept: ["business rates", "businessrates", "rates"],
        answer:
          "Business rates. Along with rent, they are a fixed cost — payable whether or not the business sells anything, which is what makes an expensive site risky.",
      },
      {
        question: "Rent is an example of which type of cost?",
        accept: ["fixed", "fixed cost", "a fixed cost", "fixed costs"],
        answer:
          "A fixed cost. It does not change with how much you produce or sell, so a high rent raises the number of units you must sell just to break even.",
      },
      {
        question: "What is the name for an area where government offers reduced taxes to attract businesses?",
        accept: ["enterprise zone", "an enterprise zone", "enterprisezone"],
        answer:
          "An enterprise zone. Governments use them to bring jobs to areas that need them, which can make an otherwise unattractive location worth considering.",
      },
      {
        question: "Customers who buy because they happened to walk past are called passing ______.",
        accept: ["trade", "passing trade"],
        answer:
          "Passing trade. It is the reason high street rents are high, and the reason an out-of-town site usually needs a bigger advertising budget.",
      },
      {
        question: "A group of similar businesses located close together is called a ______.",
        accept: ["cluster", "a cluster", "clustering"],
        answer:
          "A cluster. Restaurant districts and car dealership strips exist because customers deliberately go there to compare — so competitors nearby can increase your sales.",
      },
      {
        question: "Which location type offers cheap space and good lorry access but no passing customers?",
        accept: ["industrial estate", "an industrial estate", "industrialestate", "industrial park"],
        answer:
          "An industrial estate. It suits manufacturing, warehousing and trade businesses where customers do not visit, and the savings on rent can be considerable.",
      },
      {
        question: "Money given by government to a business, which does not have to be repaid, is called a ______.",
        accept: ["grant", "a grant", "government grant"],
        answer:
          "A grant. Unlike a loan there is no interest and nothing to pay back, but grants usually come with conditions about what the money is spent on.",
      },
      {
        question: "True or false: an online business has no location costs at all.",
        accept: ["false", "f"],
        answer:
          "False. It still needs somewhere to store stock, somewhere to work, delivery arrangements and reliable internet — the costs shift rather than disappearing.",
      },
      {
        question: "Which factor matters most for a business using heavy, bulky raw materials?",
        accept: ["proximity to materials", "close to materials", "materials", "raw materials", "near suppliers", "suppliers", "proximity to suppliers"],
        answer:
          "Proximity to raw materials. Moving heavy or bulky inputs is expensive, so locating near them cuts transport costs significantly — the classic example is a sawmill near a forest.",
      },
      {
        question: "Give one reason a start-up might run the business from home.",
        accept: ["cheap", "low cost", "no rent", "saves money", "cost", "free", "low risk", "convenient"],
        answer:
          "It removes rent and business rates almost entirely, which is a major saving when cash is tight and the business has no proven income yet.",
      },
      {
        question: "The transport, power and communication networks a business relies on are called ______.",
        accept: ["infrastructure"],
        answer:
          "Infrastructure. Even a purely online business depends on it — reliable broadband and a delivery network are as essential to it as roads are to a factory.",
      },
      {
        question: "True or false: the best-located sites are usually the most expensive.",
        accept: ["true", "t"],
        answer:
          "True, and that is the central trade-off of this topic. High footfall means high rent, so the business must sell enough extra to cover the extra fixed cost.",
      },
      {
        question: "Explain why a high-rent town centre location can still be the right choice for a café. Write two or three sentences.",
        answer:
          "A café depends on passing trade, so a town centre location may bring in several times the customers of a cheap side street. If the extra revenue more than covers the extra rent, the expensive site is the better decision even though its costs are higher. The judgement is not about which rent is lower but about which site produces more profit after costs. Mark this one yourself: credit yourself for comparing extra revenue against extra cost rather than just saying more customers.",
      },
      {
        question: "A new bakery is choosing between a £2,000-a-month high street unit and a £700-a-month unit on a side street. Evaluate the decision.",
        answer:
          "The high street costs £1,300 more each month, so it must generate at least that much extra profit to be worthwhile — at, say, £1.50 profit per item, roughly 870 extra items a month, or about 29 a day. For a bakery relying on impulse purchases and lunchtime trade that is plausible, since footfall may be many times higher. The side street is lower risk: a much lower break-even point means the business survives a bad month more easily, but it will need to spend on advertising and social media to make people seek it out. Overall, if the owner has limited cash reserves the cheaper unit is safer; if she has enough to survive the first quiet months, the high street is likely to produce more profit. Mark this one yourself: full marks need the extra rent converted into extra sales needed, and a judgement that depends on the owner's cash position.",
      },
      {
        question: "Which factor matters most for a business needing passing trade?",
        choices: [
          "Proximity to the market and footfall",
          "Being close to raw materials",
          "Cheap rural land",
          "Distance from competitors",
        ],
        accept: [
          "Proximity to the market and footfall",
        ],
        answer: "A cafe or newsagent depends on people walking past. A quarry, by contrast, must be near its raw material.",
      },
      {
        question: "Locating near raw materials is most important for a business that:",
        choices: [
          "Uses bulky, heavy materials that are costly to transport",
          "Sells digital products",
          "Provides consulting services",
          "Has an online-only shop",
        ],
        accept: [
          "Uses bulky, heavy materials that are costly to transport",
        ],
        answer: "If the finished product is lighter than the inputs, it is cheaper to process near the source.",
      },
      {
        question: "A drawback of choosing a low-rent location is often:",
        choices: [
          "Fewer customers pass by",
          "Higher staff costs",
          "Better transport links",
          "More competition",
        ],
        accept: [
          "Fewer customers pass by",
        ],
        answer: "Cheap sites are usually cheap for a reason. The saving must be weighed against lost sales.",
      },
      {
        question: "For a purely online business, location matters mainly for:",
        choices: [
          "Storage, delivery access and reliable internet",
          "Shop window displays",
          "Passing trade",
          "Nearby parking for customers",
        ],
        accept: [
          "Storage, delivery access and reliable internet",
        ],
        answer: "This is why online retailers site warehouses near motorway junctions rather than in expensive high streets.",
      },
      {
        question: "Government grants can influence location by:",
        choices: [
          "Making certain areas cheaper to set up in",
          "Forcing businesses to relocate",
          "Setting the price of products",
          "Guaranteeing customers",
        ],
        accept: [
          "Making certain areas cheaper to set up in",
        ],
        answer: "Grants aim to bring jobs to areas of high unemployment, but a business should not choose a poor location for a grant alone.",
      },
    ],
    misconceptions: [
      {
        wrong: "The cheapest location is always the best for a new business.",
        right:
          "A cheap site with no customers can cost far more in lost sales and extra advertising than it saves in rent. Compare extra revenue against extra cost.",
      },
      {
        wrong: "You should always locate away from competitors.",
        right:
          "Clustering often helps. Customers travel to restaurant streets and car dealership strips precisely because there is choice, so competitors can bring you trade.",
      },
      {
        wrong: "Online businesses don't have to think about location.",
        right:
          "They still need storage, delivery links, staff and internet infrastructure. Location matters less for customers and just as much for costs.",
      },
      {
        wrong: "Rent is a variable cost because you can move somewhere cheaper.",
        right:
          "Rent is fixed: it does not change with output. Being able to change it eventually is not the same as it varying with how much you sell.",
      },
    ],
  },

  "business/the-marketing-mix": {
    summary:
      "The marketing mix is the four decisions every business has to get right together: what to sell, what to charge, where to sell it and how to tell people about it. They are known as the four Ps — Product, Price, Place, Promotion — and the reason they are taught as a mix rather than a list is that changing one forces changes in the others.",
    keyFacts: [
      {
        heading: "Product",
        points: [
          "The product must meet a customer need better than the alternatives, through design, quality, features or branding.",
          "The PRODUCT LIFE CYCLE runs: development, introduction, growth, maturity, decline.",
          "Sales are low and costs high at introduction; maturity is where most profit is made.",
          "EXTENSION STRATEGIES delay decline: new packaging, new features, new markets, price cuts, advertising.",
          "A PRODUCT PORTFOLIO spreads risk, so one product's decline does not sink the business.",
        ],
      },
      {
        heading: "Price",
        points: [
          "PRICE SKIMMING: launch high to profit from customers who must have it first, then lower it.",
          "PENETRATION PRICING: launch low to win market share quickly, then raise it.",
          "COMPETITIVE PRICING: set the price close to rivals' and compete on something else.",
          "COST-PLUS PRICING: work out the unit cost and add a fixed percentage mark-up.",
          "PSYCHOLOGICAL PRICING: £9.99 rather than £10, because it reads as noticeably cheaper.",
        ],
      },
      {
        heading: "Place",
        points: [
          "Place means how the product reaches the customer, not simply where the shop is.",
          "A DISTRIBUTION CHANNEL is the route from producer to consumer.",
          "Selling direct removes the retailer's margin and keeps the customer relationship.",
          "Selling through retailers reaches far more people but takes a cut of every sale.",
          "E-commerce and m-commerce let even tiny businesses sell nationally.",
        ],
      },
      {
        heading: "Promotion",
        points: [
          "Advertising: television, radio, print, outdoor and online.",
          "Sponsorship links a brand to an event, team or person the target market already cares about.",
          "Sales promotions: discounts, BOGOF offers, loyalty cards, free samples, competitions.",
          "Public relations aims for positive coverage that is not paid for directly.",
          "Digital promotion — social media, influencers, email, search advertising — is cheap and precisely targeted, which is why small firms rely on it.",
        ],
      },
    ],
    flashcards: [
      { term: "Marketing mix", definition: "The four decisions a business makes about its product: Product, Price, Place and Promotion." },
      { term: "Product life cycle", definition: "The stages a product passes through: development, introduction, growth, maturity and decline." },
      { term: "Extension strategy", definition: "An action taken to lengthen the life of a product and delay its decline." },
      { term: "Product portfolio", definition: "The range of products a business sells, which spreads risk across several items." },
      { term: "Price skimming", definition: "Charging a high price at launch and lowering it later once early adopters have bought." },
      { term: "Penetration pricing", definition: "Charging a low price at launch to win market share quickly, then raising it." },
      { term: "Competitive pricing", definition: "Setting a price close to that of rivals and competing on other factors." },
      { term: "Cost-plus pricing", definition: "Calculating the unit cost and adding a set percentage mark-up to get the selling price." },
      { term: "Psychological pricing", definition: "Setting a price just below a round number, such as £9.99, so it feels cheaper." },
      { term: "Distribution channel", definition: "The route a product takes from producer to final customer." },
      { term: "Retailer", definition: "A business that sells goods to the final consumer." },
      { term: "Wholesaler", definition: "A business that buys in bulk from producers and sells smaller quantities to retailers." },
      { term: "Promotion", definition: "Communicating with customers to inform them about a product and persuade them to buy it." },
      { term: "Sales promotion", definition: "A short-term incentive to buy, such as a discount, free sample or loyalty offer." },
      { term: "Branding", definition: "Creating a distinctive identity for a product so customers recognise and prefer it." },
      { term: "Brand loyalty", definition: "When customers repeatedly choose the same brand rather than comparing alternatives." },
      { term: "M-commerce", definition: "Buying and selling through mobile devices such as phones and tablets." },
      { term: "Unique selling point", definition: "The feature that makes a product different from and better than its competitors." },
    ],
    examTips: [
      {
        tip: "It is a MIX — the four Ps must fit each other",
        detail:
          "A premium product sold at a high price cannot be promoted with constant discounting or stocked in a pound shop. Answers that show the Ps supporting each other score highest.",
      },
      {
        tip: "Learn the five life cycle stages in order",
        detail:
          "Development, introduction, growth, maturity, decline. Development is the one students forget, and it is the stage where the product costs money and earns nothing.",
      },
      {
        tip: "Skimming versus penetration is about the launch price",
        detail:
          "Skimming starts HIGH and comes down; penetration starts LOW and goes up. Mixing these two up is one of the most common errors on this topic.",
      },
      {
        tip: "'Place' is not just location",
        detail:
          "It means the whole route to the customer — online, wholesaler, retailer, direct. Answers that only discuss shop location miss most of the mark.",
      },
      {
        tip: "Choose promotion to suit the target market",
        detail:
          "Television advertising is useless for a business with £500 to spend. Recommend digital promotion for a small firm and justify it on cost and targeting.",
      },
      {
        tip: "Name the extension strategy, don't just say 'advertise more'",
        detail:
          "New packaging, new flavours, new markets, added features, price reduction. Specific strategies earn the marks; 'more marketing' does not.",
      },
    ],
    practice: [
      {
        question: "How many Ps are there in the marketing mix?",
        accept: ["4", "four"],
        answer:
          "Four: Product, Price, Place and Promotion. They are taught as a mix because changing one nearly always forces changes in the others.",
      },
      {
        question: "Which pricing strategy launches a product at a high price and lowers it later?",
        accept: ["price skimming", "skimming"],
        answer:
          "Price skimming. It works when customers are impatient to be first — new games consoles and phones are the standard examples — and it recovers development costs quickly.",
      },
      {
        question: "Which pricing strategy launches at a low price to win market share quickly?",
        accept: ["penetration pricing", "penetration", "market penetration"],
        answer:
          "Penetration pricing. It buys market share at the cost of early profit, and works best where customers are willing to switch brands easily.",
      },
      {
        question: "Setting a price at £4.99 instead of £5.00 is which pricing strategy?",
        accept: ["psychological pricing", "psychological", "psychological price"],
        answer:
          "Psychological pricing. The penny makes almost no difference to cost but customers read the first digit first, so £4.99 registers as 'four pounds something'.",
      },
      {
        question: "Working out unit cost and adding a percentage mark-up is which pricing method?",
        accept: ["cost-plus", "cost plus", "cost-plus pricing", "costplus"],
        answer:
          "Cost-plus pricing. It is simple and guarantees a margin on every sale, but it ignores what competitors charge and what customers are actually willing to pay.",
      },
      {
        question: "Name the stage of the product life cycle that comes immediately after growth.",
        accept: ["maturity", "maturity stage"],
        answer:
          "Maturity. Sales are at their highest and steadiest, and this is where most of a product's total profit is made because development costs are long since paid off.",
      },
      {
        question: "Name the final stage of the product life cycle.",
        accept: ["decline", "decline stage"],
        answer:
          "Decline. Sales fall as customers move to newer alternatives, and the business must decide whether to use an extension strategy or withdraw the product.",
      },
      {
        question: "What is the general name for an action taken to lengthen a product's life?",
        accept: ["extension strategy", "an extension strategy", "extension strategies", "extensionstrategy"],
        answer:
          "An extension strategy. Examples include new packaging, new flavours, entering a new market, adding features or cutting the price — name a specific one in an exam.",
      },
      {
        question: "What is the name for a business that buys in bulk from producers and sells smaller amounts to retailers?",
        accept: ["wholesaler", "a wholesaler"],
        answer:
          "A wholesaler. They exist because most producers do not want to deal with thousands of small shops individually, and small shops cannot buy a lorry-load at a time.",
      },
      {
        question: "The route a product takes from producer to customer is called a distribution ______.",
        accept: ["channel", "distribution channel"],
        answer:
          "A distribution channel. Each extra link takes a share of the price, which is why selling direct can be more profitable per unit even though it reaches fewer people.",
      },
      {
        question: "Buying and selling through phones and tablets is known as ______.",
        accept: ["m-commerce", "mcommerce", "m commerce", "mobile commerce"],
        answer:
          "M-commerce. It matters because a growing majority of online shopping now happens on phones, which changes how a website must be designed.",
      },
      {
        question: "When customers repeatedly choose the same brand without comparing alternatives, this is called brand ______.",
        accept: ["loyalty", "brand loyalty"],
        answer:
          "Brand loyalty. It is enormously valuable because it lets a business charge more and spend less on winning customers back each time.",
      },
      {
        question: "Which stage of the product life cycle has costs but no sales at all?",
        accept: ["development", "development stage"],
        answer:
          "Development. The product is being designed and tested and earns nothing, which is why the cash flow forecast looks so alarming before a launch.",
      },
      {
        question: "Give one form of sales promotion.",
        accept: ["discount", "bogof", "buy one get one free", "loyalty card", "free sample", "competition", "coupon", "voucher", "sale", "offer"],
        answer:
          "Discounts, BOGOF offers, loyalty cards, free samples, competitions or vouchers. They lift sales quickly but train customers to wait for the next offer, so they cost margin.",
      },
      {
        question: "Explain why a small business is likely to choose social media over television advertising. Write two or three sentences.",
        answer:
          "Television advertising costs many thousands of pounds to produce and broadcast, which is beyond almost any start-up's budget. Social media is nearly free to use, can be targeted precisely at the age group and location the business is aiming at, and lets customers respond and share. The reach is smaller than television, but almost none of the spending is wasted on people who were never going to buy. Mark this one yourself: credit yourself for both cost and targeting, not just cost.",
      },
      {
        question: "A new premium chocolate brand plans to use penetration pricing. Evaluate that decision.",
        answer:
          "Penetration pricing would win trial quickly, which matters for an unknown brand competing for shelf space. But it conflicts directly with the rest of the mix: a low price signals low quality, undermining the premium positioning the product and packaging are built on, and customers who buy at the low price may resist the later increase. For a premium product, skimming or competitive pricing fits better, with promotion used to build the brand rather than discounting to buy volume. Overall the decision is a poor one because the four Ps must support each other, and this price contradicts the product. Mark this one yourself: the top marks are for identifying the CONFLICT within the marketing mix, not just for listing pricing strategies.",
      },
      {
        question: "What are the four Ps of the marketing mix?",
        choices: [
          "Product, price, place, promotion",
          "Product, profit, place, people",
          "Price, profit, promotion, people",
          "Product, price, planning, promotion",
        ],
        accept: [
          "Product, price, place, promotion",
        ],
        answer: "They must work together — a premium product sold cheaply in a discount shop sends a contradictory message.",
      },
      {
        question: "PRICE SKIMMING means:",
        choices: [
          "Setting a high price at launch, then lowering it",
          "Setting a low price to gain market share",
          "Matching competitors exactly",
          "Selling below cost",
        ],
        accept: [
          "Setting a high price at launch, then lowering it",
        ],
        answer: "It suits new technology with keen early buyers. Penetration pricing is the opposite: low at first to build share.",
      },
      {
        question: "In the marketing mix, 'place' refers to:",
        choices: [
          "How and where the product reaches the customer",
          "The location of the head office",
          "Where the product is made",
          "The country of origin",
        ],
        accept: [
          "How and where the product reaches the customer",
        ],
        answer: "It covers distribution channels — shops, online, wholesalers — and how directly the business sells.",
      },
      {
        question: "Which stage of the product life cycle usually sees sales rise most steeply?",
        choices: [
          "Growth",
          "Introduction",
          "Maturity",
          "Decline",
        ],
        accept: [
          "Growth",
        ],
        answer: "Introduction is slow and costly, maturity flattens, and decline falls. Extension strategies aim to delay decline.",
      },
      {
        question: "An extension strategy is used to:",
        choices: [
          "Prolong the life of a product before it declines",
          "Increase the size of the factory",
          "Extend credit to customers",
          "Lengthen the working day",
        ],
        accept: [
          "Prolong the life of a product before it declines",
        ],
        answer: "New packaging, new markets, added features or a price change are all common extension strategies.",
      },
    ],
    misconceptions: [
      {
        wrong: "Place just means where the shop is.",
        right:
          "Place means the whole route to the customer — direct, wholesaler, retailer, online, app. Shop location is only one small part of it.",
      },
      {
        wrong: "Price skimming means charging a low price.",
        right:
          "Skimming starts HIGH to profit from customers who must have it first, then falls. It is penetration pricing that starts low.",
      },
      {
        wrong: "The product life cycle starts when the product goes on sale.",
        right:
          "It starts at development, before any sales exist. That is the stage where costs are highest and revenue is zero, which is why cash flow matters so much.",
      },
      {
        wrong: "More promotion always means more sales.",
        right:
          "Promotion that does not match the product or the target market wastes money, and constant discounting can damage a brand permanently.",
      },
      {
        wrong: "You can change one P without affecting the others.",
        right:
          "It is called a mix for a reason. Cut the price and you change how the product is perceived, which changes where it should be sold and how it should be promoted.",
      },
    ],
  },

  "business/revenue-costs-and-profit": {
    summary:
      "This is the arithmetic the whole subject rests on. Revenue is what comes in, costs are what goes out, and profit is what is left. The formulas are short and the marks are reliable — which makes it worth being ruthlessly precise about the words, because 'revenue', 'profit' and 'cash' are three different things and using them loosely is the fastest way to lose marks here.",
    keyFacts: [
      {
        heading: "The three formulas",
        points: [
          "TOTAL REVENUE = selling price × quantity sold.",
          "TOTAL COSTS = fixed costs + total variable costs.",
          "TOTAL VARIABLE COSTS = variable cost per unit × quantity sold.",
          "PROFIT = total revenue − total costs.",
          "A negative answer is a LOSS, not a negative profit — say the word.",
        ],
      },
      {
        heading: "Fixed and variable costs",
        points: [
          "FIXED COSTS do not change with output: rent, salaries, insurance, business rates.",
          "They are still payable if the business sells nothing at all, which is what makes them dangerous.",
          "VARIABLE COSTS change directly with output: raw materials, packaging, hourly wages of production staff.",
          "The classic test: if you produced one more unit, would this cost rise? If yes it is variable.",
          "Fixed costs are fixed in the short run only — rent changes when the lease is renegotiated.",
        ],
      },
      {
        heading: "Types of profit",
        points: [
          "GROSS PROFIT = revenue − cost of sales. It ignores overheads such as rent and salaries.",
          "NET PROFIT = gross profit − other operating expenses. This is what is actually left.",
          "Gross profit margin (%) = (gross profit ÷ revenue) × 100.",
          "Net profit margin (%) = (net profit ÷ revenue) × 100.",
          "Margins matter more than the raw figure: £10,000 profit is excellent on £40,000 of sales and poor on £2 million.",
        ],
      },
      {
        heading: "Improving profit",
        points: [
          "Raise the price — increases revenue per unit, but may reduce the number sold.",
          "Sell more units — needs marketing spend, which is itself a cost.",
          "Reduce variable costs, by finding cheaper suppliers or reducing waste, without damaging quality.",
          "Reduce fixed costs, by moving somewhere cheaper or cutting overheads.",
          "Every one of these has a downside, which is why 'just raise the price' is never a full answer.",
        ],
      },
    ],
    flashcards: [
      { term: "Revenue", definition: "The total income from sales, calculated as selling price multiplied by quantity sold." },
      { term: "Total costs", definition: "Fixed costs plus total variable costs." },
      { term: "Fixed costs", definition: "Costs that do not change with the level of output, such as rent and insurance." },
      { term: "Variable costs", definition: "Costs that change directly with the level of output, such as raw materials." },
      { term: "Variable cost per unit", definition: "The variable cost of producing one single unit of output." },
      { term: "Profit", definition: "The amount remaining when total costs are subtracted from total revenue." },
      { term: "Loss", definition: "The result when total costs are greater than total revenue." },
      { term: "Gross profit", definition: "Revenue minus the cost of sales, before overheads are deducted." },
      { term: "Net profit", definition: "Gross profit minus all other operating expenses — what is genuinely left." },
      { term: "Cost of sales", definition: "The direct cost of producing or buying in the goods that were sold." },
      { term: "Overheads", definition: "Ongoing running costs not directly linked to producing a unit, such as rent and admin salaries." },
      { term: "Gross profit margin", definition: "Gross profit as a percentage of revenue: (gross profit ÷ revenue) × 100." },
      { term: "Net profit margin", definition: "Net profit as a percentage of revenue: (net profit ÷ revenue) × 100." },
      { term: "Mark-up", definition: "The amount added to the cost of a product to set its selling price." },
      { term: "Interest", definition: "The cost of borrowing money, or the reward for saving it." },
      { term: "Unit cost", definition: "The average cost of producing one unit: total costs divided by output." },
    ],
    examTips: [
      {
        tip: "Revenue is not profit",
        detail:
          "Revenue is everything that comes in before a single cost is taken off. A business with £1 million revenue can be making a loss. Never use the two words interchangeably.",
      },
      {
        tip: "Show every step of the working",
        detail:
          "Calculation questions award method marks. Even if the final number is wrong, a clearly set-out formula and substitution usually earns most of the marks.",
      },
      {
        tip: "Include units and the pound sign",
        detail:
          "£4,500 is an answer; 4500 is a number. Percentages need the % sign. This is the cheapest mark in the whole paper and it is thrown away constantly.",
      },
      {
        tip: "Say 'loss' when the answer is negative",
        detail:
          "Writing 'profit = −£2,000' is not wrong but 'a loss of £2,000' shows you understood it. Some mark schemes require the word.",
      },
      {
        tip: "Test whether a cost is variable by adding one unit",
        detail:
          "If making one more would increase it, it is variable. Rent does not change; flour does. This single test settles almost every case.",
      },
      {
        tip: "Use margins, not raw profit, to compare businesses",
        detail:
          "A £50,000 profit means nothing until you know the revenue. Margin questions are asking whether the business converts sales into profit efficiently.",
      },
    ],
    workedExamples: [
      {
        question:
          "A bakery sells 3,000 loaves a month at £2.50 each. Fixed costs are £2,800 a month and the variable cost per loaf is £0.90. Calculate the monthly profit.",
        steps: [
          "Total revenue = price × quantity = £2.50 × 3,000 = £7,500.",
          "Total variable costs = variable cost per unit × quantity = £0.90 × 3,000 = £2,700.",
          "Total costs = fixed + variable = £2,800 + £2,700 = £5,500.",
          "Profit = total revenue − total costs = £7,500 − £5,500 = £2,000.",
        ],
        answer: "£2,000 profit per month",
      },
      {
        question:
          "A shop has revenue of £120,000 and cost of sales of £78,000. Other expenses come to £27,000. Calculate the gross profit, the net profit, and the net profit margin.",
        steps: [
          "Gross profit = revenue − cost of sales = £120,000 − £78,000 = £42,000.",
          "Net profit = gross profit − other expenses = £42,000 − £27,000 = £15,000.",
          "Net profit margin = (net profit ÷ revenue) × 100 = (15,000 ÷ 120,000) × 100.",
          "15,000 ÷ 120,000 = 0.125, and 0.125 × 100 = 12.5%.",
        ],
        answer: "Gross profit £42,000; net profit £15,000; net profit margin 12.5%",
      },
      {
        question:
          "A business sells 500 units at £12. Fixed costs are £3,000 and variable costs are £7 per unit. Is it making a profit or a loss, and how much?",
        steps: [
          "Total revenue = £12 × 500 = £6,000.",
          "Total variable costs = £7 × 500 = £3,500.",
          "Total costs = £3,000 + £3,500 = £6,500.",
          "£6,000 − £6,500 = −£500, and because the answer is negative it is a LOSS.",
        ],
        answer: "A loss of £500",
      },
    ],
    practice: [
      {
        question: "A business sells 400 items at £15 each. Calculate total revenue in pounds. Give the number only.",
        accept: ["6000", "6,000"],
        answer:
          "£6,000. Revenue = price × quantity = 15 × 400. Remember this is income BEFORE any costs are deducted, so it tells you nothing yet about whether the business is profitable.",
      },
      {
        question: "Fixed costs are £4,000 and total variable costs are £6,500. Calculate total costs in pounds. Give the number only.",
        accept: ["10500", "10,500"],
        answer:
          "£10,500. Total costs = fixed + variable = 4,000 + 6,500. Both parts must be included; forgetting the fixed costs is the commonest slip in these questions.",
      },
      {
        question: "Revenue is £18,000 and total costs are £13,200. Calculate the profit in pounds. Give the number only.",
        accept: ["4800", "4,800"],
        answer:
          "£4,800 profit. Profit = total revenue − total costs = 18,000 − 13,200. Always write the pound sign in a written answer, as it is worth a mark on its own in many schemes.",
      },
      {
        question: "A firm makes 250 units with a variable cost of £8 per unit. Calculate total variable costs in pounds. Give the number only.",
        accept: ["2000", "2,000"],
        answer:
          "£2,000. Total variable costs = variable cost per unit × quantity = 8 × 250. Note this figure changes every time output changes, which is exactly what makes it variable.",
      },
      {
        question: "Is rent a fixed cost or a variable cost?",
        accept: ["fixed", "fixed cost", "a fixed cost"],
        answer:
          "Fixed. It is payable in full whether the business makes one unit or ten thousand, which is why high rent makes a business riskier as well as more expensive.",
      },
      {
        question: "Are raw materials a fixed cost or a variable cost?",
        accept: ["variable", "variable cost", "a variable cost"],
        answer:
          "Variable. Making one more unit needs more materials, so the cost rises directly with output. That 'one more unit' test settles nearly every case.",
      },
      {
        question: "Revenue is £90,000 and cost of sales is £54,000. Calculate the gross profit in pounds. Give the number only.",
        accept: ["36000", "36,000"],
        answer:
          "£36,000. Gross profit = revenue − cost of sales. It deliberately ignores overheads like rent, so it shows how profitably the business buys and sells before running costs.",
      },
      {
        question: "Gross profit is £36,000 and other expenses are £21,000. Calculate the net profit in pounds. Give the number only.",
        accept: ["15000", "15,000"],
        answer:
          "£15,000. Net profit = gross profit − other operating expenses. This is the figure that actually matters, because it is what remains for the owner or for reinvestment.",
      },
      {
        question: "Net profit is £12,000 and revenue is £80,000. Calculate the net profit margin as a percentage. Give the number only.",
        accept: ["15", "15%"],
        answer:
          "15%. Margin = (12,000 ÷ 80,000) × 100 = 0.15 × 100. Margins let you compare businesses of completely different sizes, which raw profit figures cannot.",
      },
      {
        question: "Gross profit is £45,000 and revenue is £150,000. Calculate the gross profit margin as a percentage. Give the number only.",
        accept: ["30", "30%"],
        answer:
          "30%. (45,000 ÷ 150,000) × 100 = 30%. A falling gross margin usually means either supplier costs have risen or selling prices have been cut.",
      },
      {
        question: "If total costs are greater than total revenue, what is the result called?",
        accept: ["a loss", "loss", "making a loss"],
        answer:
          "A loss. Use the word rather than writing a negative profit — some mark schemes require it, and it shows you understood the sign rather than just doing the subtraction.",
      },
      {
        question: "True or false: a business with high revenue is definitely profitable.",
        accept: ["false", "f"],
        answer:
          "False. Revenue is income before costs. A business can take £1 million and still make a loss if its costs exceed that, which is why the two words must never be swapped.",
      },
      {
        question: "A business sells 1,000 units at £6. Fixed costs are £2,000 and variable costs are £3.50 per unit. Calculate the profit in pounds. Give the number only.",
        accept: ["500"],
        answer:
          "£500. Revenue = 6 × 1,000 = £6,000. Variable costs = 3.50 × 1,000 = £3,500. Total costs = 2,000 + 3,500 = £5,500. Profit = 6,000 − 5,500 = £500.",
      },
      {
        question: "Ongoing running costs not linked directly to making a unit, such as admin salaries, are called ______.",
        accept: ["overheads", "overhead"],
        answer:
          "Overheads. They are deducted from gross profit to reach net profit, and they are usually where a business looks first when it needs to cut costs.",
      },
      {
        question: "Explain the difference between gross profit and net profit. Write two or three sentences.",
        answer:
          "Gross profit is revenue minus the cost of sales — the direct cost of the goods sold — so it shows how profitably a business buys and sells before any running costs. Net profit then subtracts all other expenses such as rent, salaries and insurance, so it is what genuinely remains. A business can have a healthy gross profit and still make a net loss if its overheads are too high. Mark this one yourself: credit yourself for defining both AND for the point that one can be positive while the other is negative.",
      },
      {
        question: "A café owner wants to increase profit and is considering raising prices by 20%. Evaluate this plan.",
        answer:
          "Raising prices increases revenue per customer immediately and costs nothing to implement, so if customers keep buying, profit rises quickly. But demand for café food is fairly price-sensitive and there are usually competitors nearby, so a 20% rise may push enough customers away that total revenue actually falls. Alternatives include reducing waste, negotiating with suppliers to cut variable costs, or increasing sales volume through promotion — each with its own drawbacks. Overall, a smaller rise on items where customers are least price-sensitive, combined with cost control, is likely to be safer than a blanket 20%. Mark this one yourself: full marks need the effect on DEMAND considered, plus at least one alternative and a judgement.",
      },
      {
        question: "Revenue is calculated as:",
        choices: [
          "Price x quantity sold",
          "Price minus cost",
          "Profit plus tax",
          "Total costs divided by output",
        ],
        accept: [
          "Price x quantity sold",
        ],
        answer: "Revenue is money coming in, before any costs are taken off. Profit is what remains afterwards.",
      },
      {
        question: "Which of these is a FIXED cost?",
        choices: [
          "Rent on premises",
          "Raw materials",
          "Packaging",
          "Piece-rate wages",
        ],
        accept: [
          "Rent on premises",
        ],
        answer: "Fixed costs do not change with output. Raw materials and packaging rise as more is produced, so they are variable.",
      },
      {
        question: "Profit is calculated as:",
        choices: [
          "Total revenue minus total costs",
          "Revenue minus fixed costs only",
          "Revenue plus costs",
          "Price minus variable cost",
        ],
        accept: [
          "Total revenue minus total costs",
        ],
        answer: "Price minus variable cost per unit gives CONTRIBUTION, which is a different figure used in break-even work.",
      },
      {
        question: "If revenue is 50,000 and total costs are 42,000, the profit is:",
        choices: [
          "8,000",
          "92,000",
          "42,000",
          "12,000",
        ],
        accept: [
          "8,000",
        ],
        answer: "50,000 - 42,000 = 8,000. If costs exceed revenue the answer is a loss, written as a negative.",
      },
      {
        question: "Gross profit differs from net profit because gross profit:",
        choices: [
          "Only takes off the cost of sales",
          "Takes off all costs including expenses",
          "Includes tax already",
          "Is always smaller",
        ],
        accept: [
          "Only takes off the cost of sales",
        ],
        answer: "Net profit then deducts other expenses such as rent, wages and interest, so it is always the lower figure.",
      },
    ],
    misconceptions: [
      {
        wrong: "Revenue and profit are basically the same thing.",
        right:
          "Revenue is everything coming in before costs; profit is what remains after them. A business with enormous revenue can be losing money every month.",
      },
      {
        wrong: "Fixed costs never change.",
        right:
          "They do not change with OUTPUT, which is a different claim. Rent can rise at a review; what makes it fixed is that making one more unit does not increase it.",
      },
      {
        wrong: "Profit is the same as cash in the bank.",
        right:
          "Profit is calculated when a sale is made; cash arrives when the customer actually pays. A profitable business can still run out of money, which is the whole point of cash flow.",
      },
      {
        wrong: "The business with the biggest profit is performing best.",
        right:
          "Only margins allow a fair comparison. £50,000 profit on £100,000 revenue is excellent; the same profit on £5 million of revenue is poor.",
      },
      {
        wrong: "Raising the price always increases profit.",
        right:
          "It increases profit per unit but usually reduces the number sold. Whether total profit rises depends on how sensitive customers are to price.",
      },
    ],
  },

  "business/break-even-analysis": {
    summary:
      "Break-even is the point where a business stops losing money and starts making it — the exact number of units it must sell to cover all its costs. It is the most useful calculation in the whole course, because it turns a vague worry ('can we afford this rent?') into a specific number you can check against reality. The margin of safety then tells you how much room for error you actually have.",
    keyFacts: [
      {
        heading: "The formulas",
        points: [
          "CONTRIBUTION PER UNIT = selling price per unit − variable cost per unit.",
          "BREAK-EVEN POINT (in units) = fixed costs ÷ contribution per unit.",
          "MARGIN OF SAFETY (in units) = actual sales − break-even point.",
          "At break-even, total revenue exactly equals total costs, so profit is zero.",
          "Above break-even, every extra unit sold adds its whole contribution straight to profit.",
        ],
      },
      {
        heading: "Understanding contribution",
        points: [
          "Contribution is what each sale 'contributes' towards paying off the fixed costs.",
          "Once fixed costs are covered, contribution becomes profit.",
          "A higher contribution per unit means fewer units are needed to break even.",
          "Contribution rises if the price rises OR if the variable cost per unit falls.",
          "Contribution is not profit — it is profit only after all fixed costs have been paid.",
        ],
      },
      {
        heading: "The break-even chart",
        points: [
          "Output (units) goes on the horizontal axis; money (£) goes on the vertical axis.",
          "Fixed costs are a horizontal line, because they do not change with output.",
          "Total costs start at the fixed cost level and slope upwards.",
          "Total revenue starts at zero — sell nothing, earn nothing — and slopes upwards more steeply.",
          "Break-even is where the total revenue and total cost lines cross; the gap between them afterwards is profit.",
        ],
      },
      {
        heading: "Margin of safety and its uses",
        points: [
          "Margin of safety is how far sales can fall before the business starts making a loss.",
          "It can be expressed in units, in pounds of revenue, or as a percentage of current sales.",
          "A large margin of safety means the business can survive a bad month; a small one means it is fragile.",
          "Break-even analysis helps decide whether a price, a rent or a loan is affordable BEFORE committing.",
          "Its weakness: it assumes every unit sells at the same price and that costs stay constant, which is rarely quite true.",
        ],
      },
    ],
    flashcards: [
      { term: "Break-even point", definition: "The level of output at which total revenue exactly equals total costs, so the business makes neither profit nor loss." },
      { term: "Contribution per unit", definition: "Selling price per unit minus variable cost per unit — what each sale contributes towards fixed costs." },
      { term: "Total contribution", definition: "Contribution per unit multiplied by the number of units sold." },
      { term: "Margin of safety", definition: "The amount by which actual sales exceed the break-even point — how far sales can fall before a loss is made." },
      { term: "Break-even chart", definition: "A graph plotting fixed costs, total costs and total revenue against output, showing where the lines cross." },
      { term: "Break-even output", definition: "The number of units that must be sold to break even." },
      { term: "Break-even revenue", definition: "The sales income needed to break even: break-even output multiplied by selling price." },
      { term: "Fixed costs", definition: "Costs that stay the same regardless of output, which must be covered before any profit is made." },
      { term: "Variable cost per unit", definition: "The cost of the materials and direct labour used in producing one unit." },
      { term: "Loss", definition: "The result of selling fewer units than the break-even point." },
      { term: "Profit at a given output", definition: "Total contribution minus fixed costs." },
      { term: "Selling price", definition: "The amount a customer pays for one unit." },
      { term: "Target profit output", definition: "The units needed to reach a chosen profit: (fixed costs + target profit) ÷ contribution per unit." },
      { term: "Capacity", definition: "The maximum output a business can produce with its current resources." },
      { term: "Angle of incidence", definition: "The angle between the revenue and total cost lines beyond break-even — a wider angle means profit builds faster." },
    ],
    examTips: [
      {
        tip: "Work out contribution FIRST, every time",
        detail:
          "Price minus variable cost per unit. Almost every mistake in this topic comes from dividing fixed costs by the price instead of by the contribution.",
      },
      {
        tip: "Break-even is measured in UNITS unless asked otherwise",
        detail:
          "If the question wants revenue, multiply the units by the selling price afterwards. Read carefully which one is being asked for.",
      },
      {
        tip: "Never subtract fixed costs per unit",
        detail:
          "Contribution uses VARIABLE costs only. Fixed costs are covered afterwards, in one lump, by the total contribution.",
      },
      {
        tip: "Round break-even UP to a whole unit",
        detail:
          "You cannot sell 340.6 sandwiches. Selling 340 leaves you just short of covering costs, so the answer is 341.",
      },
      {
        tip: "Label both axes on a break-even chart",
        detail:
          "Output on the horizontal, money on the vertical. Unlabelled axes lose marks even when the lines are drawn perfectly.",
      },
      {
        tip: "Say what the margin of safety MEANS, not just the number",
        detail:
          "'A margin of safety of 200 units means sales could fall by 200 before the business starts losing money' — that sentence is where the analysis mark is.",
      },
    ],
    workedExamples: [
      {
        question:
          "A café sells sandwiches for £4.50. The ingredients and packaging cost £1.70 per sandwich. Fixed costs are £1,400 a month. Calculate the break-even point in sandwiches.",
        steps: [
          "Find the contribution per unit first: selling price − variable cost per unit.",
          "Contribution = £4.50 − £1.70 = £2.80 per sandwich.",
          "Break-even = fixed costs ÷ contribution per unit = 1,400 ÷ 2.80.",
          "1,400 ÷ 2.80 = 500 sandwiches.",
        ],
        answer: "500 sandwiches a month",
      },
      {
        question:
          "The same café actually sells 720 sandwiches a month. Calculate its margin of safety, and explain what the figure means.",
        steps: [
          "Margin of safety = actual sales − break-even point.",
          "Margin of safety = 720 − 500 = 220 sandwiches.",
          "As a percentage: (220 ÷ 720) × 100 = 30.6%.",
          "Interpret it: sales could fall by 220 sandwiches, about 31%, before the café began making a loss.",
        ],
        answer: "220 sandwiches, or about 30.6% of current sales",
      },
      {
        question:
          "A business has fixed costs of £9,000, a selling price of £25 and variable costs of £10 per unit. How many units must it sell to make a £3,000 profit?",
        steps: [
          "Contribution per unit = £25 − £10 = £15.",
          "For a target profit, the total to be covered is fixed costs PLUS the target profit: £9,000 + £3,000 = £12,000.",
          "Units needed = £12,000 ÷ £15.",
          "12,000 ÷ 15 = 800 units.",
        ],
        answer: "800 units",
      },
      {
        question:
          "A firm's rent rises from £1,200 to £1,800 a month. Its contribution per unit is £4. Calculate the change in its break-even point.",
        steps: [
          "Old break-even = 1,200 ÷ 4 = 300 units.",
          "New break-even = 1,800 ÷ 4 = 450 units.",
          "Change = 450 − 300 = 150 units.",
          "So the rent rise means 150 more units must be sold every month just to stand still.",
        ],
        answer: "The break-even point rises by 150 units, from 300 to 450",
      },
    ],
    practice: [
      {
        question: "Selling price is £9 and variable cost per unit is £4. Calculate the contribution per unit in pounds. Give the number only.",
        accept: ["5"],
        answer:
          "£5. Contribution = selling price − variable cost per unit = 9 − 4. This is the figure that goes towards paying off fixed costs, and it must be found before anything else.",
      },
      {
        question: "Fixed costs are £6,000 and contribution per unit is £3. Calculate the break-even point in units. Give the number only.",
        accept: ["2000", "2,000"],
        answer:
          "2,000 units. Break-even = fixed costs ÷ contribution per unit = 6,000 ÷ 3. Note you divide by CONTRIBUTION, never by the selling price.",
      },
      {
        question: "Fixed costs are £4,500, price is £12 and variable cost is £7.50 per unit. Calculate the break-even point in units. Give the number only.",
        accept: ["1000", "1,000"],
        answer:
          "1,000 units. Contribution = 12 − 7.50 = £4.50. Break-even = 4,500 ÷ 4.50 = 1,000. Always do the subtraction before the division.",
      },
      {
        question: "Break-even is 350 units and the business actually sells 500. Calculate the margin of safety in units. Give the number only.",
        accept: ["150"],
        answer:
          "150 units. Margin of safety = actual sales − break-even = 500 − 350. It means sales could fall by 150 units before the business started making a loss.",
      },
      {
        question: "A business sells 900 units and breaks even at 600. Calculate the margin of safety in units. Give the number only.",
        accept: ["300"],
        answer:
          "300 units. That is a comfortable cushion — a third of current sales could disappear before the business moved into loss, which suggests it could survive a poor quarter.",
      },
      {
        question: "At the break-even point, what is the level of profit in pounds? Give the number only.",
        accept: ["0", "zero"],
        answer:
          "£0. Break-even is by definition where total revenue exactly equals total costs, so the business makes neither a profit nor a loss at that exact level of output.",
      },
      {
        question: "Fixed costs are £2,400 and contribution per unit is £6. Calculate the break-even point in units. Give the number only.",
        accept: ["400"],
        answer:
          "400 units. 2,400 ÷ 6 = 400. Once those 400 are sold, every further unit adds its full £6 contribution straight to profit, because fixed costs are already covered.",
      },
      {
        question: "On a break-even chart, which line is horizontal?",
        accept: ["fixed costs", "the fixed cost line", "fixed cost", "fixed costs line"],
        answer:
          "The fixed cost line. It is horizontal because fixed costs stay the same at every level of output, which is the definition of a fixed cost.",
      },
      {
        question: "On a break-even chart, which variable goes on the horizontal axis?",
        accept: ["output", "quantity", "units", "units sold", "output in units", "sales volume"],
        answer:
          "Output, measured in units. Money in pounds goes on the vertical axis. Unlabelled axes lose marks even when the lines themselves are drawn correctly.",
      },
      {
        question: "Fixed costs are £10,000, contribution per unit is £8, and the target profit is £6,000. How many units are needed? Give the number only.",
        accept: ["2000", "2,000"],
        answer:
          "2,000 units. For a target profit, add it to the fixed costs first: (10,000 + 6,000) ÷ 8 = 16,000 ÷ 8 = 2,000. The profit is treated as another cost to be covered.",
      },
      {
        question: "If fixed costs rise and everything else stays the same, does the break-even point rise or fall?",
        accept: ["rise", "rises", "increase", "increases", "goes up", "higher", "it rises"],
        answer:
          "It rises. More fixed cost must be covered by the same contribution per unit, so more units must be sold. This is exactly why a rent increase is more serious than it looks.",
      },
      {
        question: "If the selling price rises and costs stay the same, does the break-even point rise or fall?",
        accept: ["fall", "falls", "decrease", "decreases", "goes down", "lower", "it falls"],
        answer:
          "It falls. A higher price means a larger contribution per unit, so fewer units are needed to cover the fixed costs — though in reality a higher price may also reduce demand.",
      },
      {
        question: "Break-even is 240 units and the selling price is £15. Calculate the break-even revenue in pounds. Give the number only.",
        accept: ["3600", "3,600"],
        answer:
          "£3,600. Break-even revenue = break-even units × selling price = 240 × 15. Read the question carefully: it asks for revenue in pounds, not the number of units.",
      },
      {
        question: "A calculation gives a break-even point of 340.6 units. What should the answer be rounded to?",
        accept: ["341"],
        answer:
          "341 units. Always round UP, because you cannot sell part of a sandwich — and stopping at 340 would leave the business fractionally short of covering its costs.",
      },
      {
        question: "Explain why a business with a small margin of safety is in a risky position. Write two or three sentences.",
        answer:
          "A small margin of safety means current sales are only just above the break-even point, so even a modest fall — a quiet month, a new competitor, a rainy fortnight — pushes the business into making a loss. It leaves no room for error in the forecast either. The business could reduce the risk by lowering fixed costs, raising the contribution per unit, or increasing sales. Mark this one yourself: credit yourself for saying a small fall in sales causes a loss, and for suggesting at least one way to widen the margin.",
      },
      {
        question: "Break-even analysis suggests a new shop needs to sell 900 items a month. Evaluate how useful this figure is to the owner.",
        answer:
          "It is genuinely useful because it converts a vague worry into a testable number: the owner can compare 900 a month — about 30 a day — against realistic footfall and decide whether the rent is affordable before signing a lease. It also shows immediately how much the break-even point moves if the rent or the price changes. But it rests on assumptions that are rarely exactly true: that every item sells at the same price with no discounts, that variable costs per unit stay constant however much is bought, and that the sales forecast itself is reliable. It also ignores cash flow timing entirely. Overall it is a valuable planning tool and a poor prediction — best used to test whether a plan is plausible rather than to promise what will happen. Mark this one yourself: the top band needs the ASSUMPTIONS criticised, not just the benefits listed.",
      },
      {
        question: "The break-even point is where:",
        choices: [
          "Total revenue equals total costs",
          "Profit is highest",
          "Variable costs equal fixed costs",
          "Revenue is zero",
        ],
        accept: [
          "Total revenue equals total costs",
        ],
        answer: "At break-even the business makes neither profit nor loss. Above it there is profit; below it, a loss.",
      },
      {
        question: "Contribution per unit is calculated as:",
        choices: [
          "Selling price minus variable cost per unit",
          "Selling price minus fixed costs",
          "Fixed costs divided by output",
          "Revenue minus total costs",
        ],
        accept: [
          "Selling price minus variable cost per unit",
        ],
        answer: "Each unit sold contributes this much towards covering the fixed costs, and towards profit once they are covered.",
      },
      {
        question: "Break-even output is found by:",
        choices: [
          "Fixed costs divided by contribution per unit",
          "Fixed costs divided by selling price",
          "Total costs divided by output",
          "Revenue divided by variable costs",
        ],
        accept: [
          "Fixed costs divided by contribution per unit",
        ],
        answer: "Using selling price instead of contribution is the classic error and gives a break-even figure that is far too low.",
      },
      {
        question: "The MARGIN OF SAFETY is:",
        choices: [
          "The gap between actual sales and break-even output",
          "The profit made on each unit",
          "The amount of cash held in reserve",
          "Fixed costs minus variable costs",
        ],
        accept: [
          "The gap between actual sales and break-even output",
        ],
        answer: "It shows how far sales could fall before the business starts making a loss, which is why lenders look at it.",
      },
      {
        question: "If fixed costs rise, the break-even output will:",
        choices: [
          "Increase",
          "Decrease",
          "Stay the same",
          "Fall to zero",
        ],
        accept: [
          "Increase",
        ],
        answer: "More units must be sold to cover the higher fixed costs. Raising the selling price would lower break-even instead.",
      },
    ],
    misconceptions: [
      {
        wrong: "Break-even point = fixed costs ÷ selling price.",
        right:
          "It is fixed costs ÷ CONTRIBUTION per unit, and contribution is price minus variable cost. Dividing by the price ignores the cost of making each unit and gives a far too optimistic answer.",
      },
      {
        wrong: "Contribution is the same as profit.",
        right:
          "Contribution is what each sale puts towards the fixed costs. It only becomes profit once every fixed cost has been covered — that is, past the break-even point.",
      },
      {
        wrong: "At break-even a business is making a small profit.",
        right:
          "It makes exactly zero. Total revenue equals total costs. That is what the word means.",
      },
      {
        wrong: "A break-even chart proves what will happen.",
        right:
          "It assumes constant prices, constant costs per unit and an accurate sales forecast. It tests whether a plan is plausible; it does not predict the future.",
      },
      {
        wrong: "Margin of safety is the same as profit.",
        right:
          "Margin of safety is measured in units or as a percentage of sales — it is how far sales can FALL before a loss. Profit is an amount of money.",
      },
    ],
  },

  "business/cash-flow": {
    summary:
      "This is the topic that explains why profitable businesses go bust. Profit is worked out when a sale is made; cash arrives when the customer actually pays. If the wages are due on Friday and the customer pays in sixty days, the business can be perfectly profitable on paper and still unable to pay anyone. A cash flow forecast is how you see that coming.",
    keyFacts: [
      {
        heading: "Cash is not profit",
        points: [
          "PROFIT is revenue minus costs over a period; CASH is the money actually in the bank right now.",
          "A sale on credit creates profit immediately but no cash until the invoice is paid.",
          "Buying stock uses cash immediately but only becomes a cost when the stock is sold.",
          "Running out of cash is called INSOLVENCY, and it is the commonest cause of business failure.",
          "A business can be profitable and insolvent at the same time — this is the single most important idea in the topic.",
        ],
      },
      {
        heading: "The cash flow forecast",
        points: [
          "CASH INFLOWS are money coming in: sales receipts, loans, investment, grants.",
          "CASH OUTFLOWS are money going out: stock, wages, rent, utilities, loan repayments.",
          "NET CASH FLOW = total inflows − total outflows for that month.",
          "CLOSING BALANCE = opening balance + net cash flow.",
          "This month's closing balance becomes next month's opening balance — the chain that makes the forecast work.",
        ],
      },
      {
        heading: "Why forecast at all",
        points: [
          "It identifies months where the business will run short BEFORE it happens.",
          "Banks and investors almost always require one before lending.",
          "It shows whether an overdraft is needed and how big it must be.",
          "It supports decisions on timing — when to buy equipment, when to hire.",
          "It is only a forecast: it relies on estimates, and unexpected events break it.",
        ],
      },
      {
        heading: "Solving cash flow problems",
        points: [
          "Increase inflows: chase debtors, offer discounts for early payment, sell unused assets.",
          "Reduce outflows: negotiate longer credit terms with suppliers, delay non-essential spending, cut costs.",
          "Arrange an overdraft or short-term loan to cover a known gap.",
          "Hold less stock, so less cash is tied up in goods sitting in a stockroom.",
          "Every solution has a cost: overdrafts charge interest, discounts reduce revenue, delaying suppliers damages relationships.",
        ],
      },
    ],
    flashcards: [
      { term: "Cash flow", definition: "The movement of money into and out of a business over a period of time." },
      { term: "Cash inflow", definition: "Money coming into the business, such as sales receipts, loans or investment." },
      { term: "Cash outflow", definition: "Money going out of the business, such as wages, rent, stock and loan repayments." },
      { term: "Net cash flow", definition: "Total cash inflows minus total cash outflows for a period." },
      { term: "Opening balance", definition: "The amount of cash a business has at the start of a period." },
      { term: "Closing balance", definition: "The cash held at the end of a period: opening balance plus net cash flow." },
      { term: "Cash flow forecast", definition: "A prediction of the cash flowing into and out of a business over future months." },
      { term: "Insolvency", definition: "Being unable to pay debts as they fall due, even if the business is profitable on paper." },
      { term: "Liquidity", definition: "How easily a business can turn its assets into cash to pay its bills." },
      { term: "Trade credit", definition: "An arrangement to buy goods now and pay for them later, usually within 30 to 90 days." },
      { term: "Debtor", definition: "A customer who owes the business money for goods already supplied." },
      { term: "Creditor", definition: "A supplier or lender the business owes money to." },
      { term: "Overdraft", definition: "An arrangement allowing a business to spend more than it has in its bank account, up to a limit." },
      { term: "Credit period", definition: "The length of time a customer is given to pay an invoice." },
      { term: "Working capital", definition: "The money available for day-to-day running: current assets minus current liabilities." },
      { term: "Stock", definition: "Goods and materials held by a business, which tie up cash until they are sold." },
    ],
    examTips: [
      {
        tip: "Never write that cash flow and profit are the same",
        detail:
          "This is the single most examined distinction in the topic, and it appears in evaluation questions across the whole course. A profitable business can still run out of money.",
      },
      {
        tip: "Carry the closing balance forward",
        detail:
          "This month's closing balance is next month's opening balance. Forgetting to carry it forward is the most common arithmetic error in these tables.",
      },
      {
        tip: "Use brackets or a minus sign for negatives, and say what it means",
        detail:
          "A negative closing balance means the business cannot pay its bills that month. State that consequence — the interpretation is where the analysis marks are.",
      },
      {
        tip: "Give a drawback with every solution",
        detail:
          "Overdrafts cost interest; delaying suppliers harms relationships; early-payment discounts reduce revenue. Balanced answers reach the higher bands.",
      },
      {
        tip: "Watch for the timing trap in the question",
        detail:
          "'Customers pay two months later' means a sale made in January appears as cash in March. Case studies build questions around exactly this.",
      },
      {
        tip: "A forecast is an estimate, not a fact",
        detail:
          "Sales may be lower or costs higher than predicted. Saying so is worth a mark in evaluation questions about how useful the forecast is.",
      },
    ],
    workedExamples: [
      {
        question:
          "In March a business starts with £2,500. Inflows are £8,000 and outflows are £9,200. Calculate the net cash flow and the closing balance.",
        steps: [
          "Net cash flow = total inflows − total outflows = £8,000 − £9,200.",
          "8,000 − 9,200 = −£1,200, so this is a NEGATIVE net cash flow.",
          "Closing balance = opening balance + net cash flow = £2,500 + (−£1,200).",
          "2,500 − 1,200 = £1,300 left at the end of March.",
        ],
        answer: "Net cash flow −£1,200; closing balance £1,300",
      },
      {
        question:
          "April opens with the £1,300 from March. Inflows are £7,000 and outflows are £8,800. Calculate the closing balance and explain the problem.",
        steps: [
          "Net cash flow = £7,000 − £8,800 = −£1,800.",
          "Closing balance = £1,300 + (−£1,800) = −£500.",
          "The balance is negative, so the business cannot pay all its bills in April.",
          "It needs an overdraft of at least £500, or must delay a payment or bring cash in sooner.",
        ],
        answer: "Closing balance −£500 — the business runs out of cash in April",
      },
    ],
    practice: [
      {
        question: "Inflows are £12,000 and outflows are £9,500. Calculate the net cash flow in pounds. Give the number only.",
        accept: ["2500", "2,500"],
        answer:
          "£2,500. Net cash flow = inflows − outflows = 12,000 − 9,500. A positive figure means more money came in than went out that month.",
      },
      {
        question: "Opening balance is £3,000 and net cash flow is £1,400. Calculate the closing balance in pounds. Give the number only.",
        accept: ["4400", "4,400"],
        answer:
          "£4,400. Closing balance = opening balance + net cash flow = 3,000 + 1,400. Remember this figure becomes next month's opening balance.",
      },
      {
        question: "Opening balance is £2,000 and net cash flow is −£3,200. Calculate the closing balance in pounds. Give the number only, including the minus sign.",
        accept: ["-1200", "-1,200"],
        answer:
          "−£1,200. 2,000 + (−3,200) = −1,200. A negative closing balance means the business cannot pay all its bills that month and needs an overdraft or other action.",
      },
      {
        question: "What is the term for money coming into a business?",
        accept: ["cash inflow", "inflow", "inflows", "cash inflows"],
        answer:
          "Cash inflow. It includes sales receipts, loans, investment and grants — note that a loan is an inflow of cash even though it is not revenue.",
      },
      {
        question: "What is the term for being unable to pay debts as they fall due?",
        accept: ["insolvency", "insolvent", "being insolvent"],
        answer:
          "Insolvency. Crucially, a business can be insolvent while still being profitable on paper, which is why cash flow is watched separately from profit.",
      },
      {
        question: "A customer who owes the business money is called a ______.",
        accept: ["debtor", "a debtor", "debtors"],
        answer:
          "A debtor. Chasing debtors is one of the fastest ways to improve cash flow, because the money has already been earned — it just has not arrived yet.",
      },
      {
        question: "A supplier the business owes money to is called a ______.",
        accept: ["creditor", "a creditor", "creditors"],
        answer:
          "A creditor. Negotiating longer credit terms with creditors keeps cash in the business for longer, though it can strain the relationship if overused.",
      },
      {
        question: "What is the name for an arrangement allowing a business to spend more than it has in its bank account?",
        accept: ["overdraft", "an overdraft", "bank overdraft"],
        answer:
          "An overdraft. It is flexible and quick to arrange, which suits a short-term gap, but the interest rate is usually high so it is expensive as a long-term solution.",
      },
      {
        question: "Buying goods now and paying for them later is called trade ______.",
        accept: ["credit", "trade credit"],
        answer:
          "Trade credit. It is effectively an interest-free short-term loan from a supplier, and it is one of the most important cash flow tools a small business has.",
      },
      {
        question: "Current assets minus current liabilities is called working ______.",
        accept: ["capital", "working capital"],
        answer:
          "Working capital. It measures the money available for day-to-day running, and a business with too little of it cannot pay its bills even if it owns valuable equipment.",
      },
      {
        question: "True or false: a profitable business can still run out of cash.",
        accept: ["true", "t"],
        answer:
          "True, and this is the central idea of the whole topic. Profit is recorded when a sale is made; cash arrives when the customer pays, which may be months later.",
      },
      {
        question: "Inflows are £6,400 and outflows are £7,900. Calculate the net cash flow in pounds. Give the number only, including the minus sign.",
        accept: ["-1500", "-1,500"],
        answer:
          "−£1,500. 6,400 − 7,900 = −1,500. A negative net cash flow is survivable if the opening balance is large enough; the danger is the closing balance going negative.",
      },
      {
        question: "Name one way a business can increase its cash inflows.",
        accept: ["chase debtors", "sell assets", "discount for early payment", "get a loan", "reduce credit period", "sell stock", "overdraft", "investment", "chasing debtors"],
        answer:
          "Chase debtors, offer discounts for early payment, sell unused assets, or arrange a loan or overdraft. Each has a cost, and saying what that cost is earns the higher marks.",
      },
      {
        question: "How easily a business can turn its assets into cash is called ______.",
        accept: ["liquidity", "liquid"],
        answer:
          "Liquidity. Cash is perfectly liquid; a delivery van is not, because selling it takes time and might not raise its full value in a hurry.",
      },
      {
        question: "Explain why a growing business can suffer cash flow problems. Write two or three sentences.",
        answer:
          "Growth means buying more stock, hiring more staff and possibly larger premises, and all of that cash goes out before the extra sales are made. If customers then pay on credit, the money comes back weeks or months after the costs were paid. So the faster a business grows, the wider the gap between money leaving and money arriving — which is why expanding businesses so often need an overdraft precisely when they look most successful. Mark this one yourself: credit yourself for the timing gap between spending and receiving, and for linking it to growth specifically.",
      },
      {
        question: "A business forecasts a £4,000 cash shortfall next month. Evaluate whether it should use an overdraft or delay paying its suppliers.",
        answer:
          "An overdraft is quick, flexible and only charges interest on what is used, so it covers a known one-month gap cleanly without damaging any relationships — but the interest rate is high and the bank can withdraw the facility. Delaying suppliers costs nothing directly and keeps cash in the business, but it risks the supplier refusing further credit, demanding payment upfront in future, or stopping deliveries altogether, which could be far more damaging than the interest. Since the shortfall is temporary and identified in advance, the overdraft is probably the better choice: it is a known, priced cost rather than an unpredictable relationship risk. If the shortfall were permanent, neither would solve the underlying problem. Mark this one yourself: full marks need both options weighed AND a conclusion that depends on the shortfall being temporary.",
      },
      {
        question: "Cash flow is best described as:",
        choices: [
          "The money moving into and out of a business over time",
          "The profit made in a year",
          "The value of the business's assets",
          "The total of all sales",
        ],
        accept: [
          "The money moving into and out of a business over time",
        ],
        answer: "A profitable business can still fail if cash arrives later than the bills, which is why the two are tracked separately.",
      },
      {
        question: "Net cash flow is calculated as:",
        choices: [
          "Cash inflows minus cash outflows",
          "Revenue minus costs",
          "Opening balance plus closing balance",
          "Profit minus tax",
        ],
        accept: [
          "Cash inflows minus cash outflows",
        ],
        answer: "Adding net cash flow to the opening balance gives the closing balance for that period.",
      },
      {
        question: "Which would IMPROVE a cash flow problem?",
        choices: [
          "Negotiating longer credit terms with suppliers",
          "Paying suppliers earlier",
          "Buying more stock than needed",
          "Offering customers longer to pay",
        ],
        accept: [
          "Negotiating longer credit terms with suppliers",
        ],
        answer: "Delaying outflows and speeding up inflows both help. Giving customers longer to pay makes it worse.",
      },
      {
        question: "A cash flow FORECAST is useful because it:",
        choices: [
          "Predicts shortfalls so action can be taken in advance",
          "Guarantees the business will be profitable",
          "Records what happened last year",
          "Replaces the need for a bank account",
        ],
        accept: [
          "Predicts shortfalls so action can be taken in advance",
        ],
        answer: "It is only an estimate, so it depends on the assumptions behind it — but seeing a problem in month four beats discovering it in month four.",
      },
      {
        question: "Why might a profitable business run out of cash?",
        choices: [
          "Customers pay later than the business must pay its own bills",
          "Profit is always fake",
          "It has too few costs",
          "It sells too cheaply to make revenue",
        ],
        accept: [
          "Customers pay later than the business must pay its own bills",
        ],
        answer: "Buying stock or equipment upfront has the same effect. Timing, not profitability, is what causes the crisis.",
      },
    ],
    misconceptions: [
      {
        wrong: "If a business is profitable, it has money in the bank.",
        right:
          "Profit is recorded when a sale is made; cash arrives when the customer pays. Businesses fail every year while showing a profit on paper.",
      },
      {
        wrong: "A loan counts as revenue.",
        right:
          "A loan is a cash INFLOW but not revenue — it is borrowed money that has to be repaid with interest. It appears in the cash flow forecast, not as sales.",
      },
      {
        wrong: "Negative net cash flow means the business is failing.",
        right:
          "One negative month is normal, especially after buying equipment or stock. The danger sign is a negative CLOSING BALANCE, or several negative months in a row.",
      },
      {
        wrong: "A cash flow forecast tells you what will happen.",
        right:
          "It is built from estimates of sales and costs, both of which can be wrong. It is a planning tool for spotting problems early, not a prediction.",
      },
      {
        wrong: "Holding lots of stock is a sign of a healthy business.",
        right:
          "Stock is cash that has been converted into goods sitting on a shelf. Too much of it starves the business of the money it needs to pay wages and suppliers.",
      },
    ],
  },

  "business/sources-of-finance": {
    summary:
      "Every business needs money before it can earn any, and where that money comes from shapes everything afterwards — how much it costs, who ends up owning the business, and what happens if it fails. This topic is about the options, and about matching the right source to the right purpose: you do not buy a building with an overdraft.",
    keyFacts: [
      {
        heading: "Internal sources",
        points: [
          "PERSONAL SAVINGS — the owner's own money. No interest, no loss of control, but all of it is at risk.",
          "RETAINED PROFIT — profit kept in the business rather than paid out. Free, but only available once profitable.",
          "SELLING ASSETS — turning equipment or property the business no longer needs into cash.",
          "Internal sources cost nothing in interest and give nothing away.",
          "Their limit is size: they are rarely enough for major expansion.",
        ],
      },
      {
        heading: "External sources",
        points: [
          "BANK LOAN — a fixed sum repaid with interest over an agreed period. Predictable, but interest must be paid whatever happens.",
          "OVERDRAFT — short-term borrowing up to a limit. Flexible and expensive; for gaps, not for purchases.",
          "TRADE CREDIT — paying suppliers 30 to 90 days later. Effectively interest-free, but only short-term.",
          "SHARE CAPITAL — selling part of the business to investors. No repayment, but ownership and control are given away.",
          "CROWDFUNDING — many small contributions raised online, which also tests demand and builds an audience.",
        ],
      },
      {
        heading: "Other external options",
        points: [
          "VENTURE CAPITAL — large investment in a high-growth business in exchange for a substantial share and often a say in decisions.",
          "GOVERNMENT GRANTS — money that does not have to be repaid, usually with conditions attached about how it is spent.",
          "LEASING — renting equipment instead of buying it, spreading the cost but paying more overall.",
          "HIRE PURCHASE — paying for an asset in instalments and owning it at the end.",
          "MORTGAGE — a long-term loan secured on property, used for premises.",
        ],
      },
      {
        heading: "Choosing a source",
        points: [
          "PURPOSE: match the length of the finance to the life of what it is buying — long-term loan for a building, overdraft for a temporary gap.",
          "COST: interest, fees, or the share of future profit given away.",
          "CONTROL: loans keep it; selling shares gives it away.",
          "RISK: borrowing must be repaid whether or not the business does well.",
          "AVAILABILITY: a start-up with no trading record will struggle to borrow at all, which is why so many rely on savings and family.",
        ],
      },
    ],
    flashcards: [
      { term: "Internal finance", definition: "Money raised from within the business, such as retained profit or selling assets." },
      { term: "External finance", definition: "Money raised from outside the business, such as loans, share capital or grants." },
      { term: "Personal savings", definition: "The owner's own money invested into the business." },
      { term: "Retained profit", definition: "Profit kept within the business to fund future activity rather than paid out to owners." },
      { term: "Bank loan", definition: "A fixed sum borrowed from a bank and repaid with interest over an agreed period." },
      { term: "Overdraft", definition: "Short-term borrowing allowing a business to spend beyond its bank balance up to an agreed limit." },
      { term: "Trade credit", definition: "Buying supplies now and paying later, typically within 30 to 90 days." },
      { term: "Share capital", definition: "Money raised by selling shares, giving investors part-ownership of the business." },
      { term: "Crowdfunding", definition: "Raising small amounts from a large number of people, usually through an online platform." },
      { term: "Venture capital", definition: "Investment by specialist investors into high-growth businesses in exchange for a share of ownership." },
      { term: "Government grant", definition: "Money from government that does not have to be repaid, usually with conditions attached." },
      { term: "Leasing", definition: "Renting an asset for a regular payment rather than buying it outright." },
      { term: "Hire purchase", definition: "Paying for an asset in instalments and owning it once the final payment is made." },
      { term: "Mortgage", definition: "A long-term loan secured against property, usually used to buy premises." },
      { term: "Collateral", definition: "An asset promised to a lender that can be taken if the loan is not repaid." },
      { term: "Interest rate", definition: "The percentage charged for borrowing money over a period of time." },
    ],
    examTips: [
      {
        tip: "Match the source to the purpose",
        detail:
          "Long-term assets need long-term finance. Suggesting an overdraft to buy a building, or a ten-year loan to cover one slow month, loses marks immediately.",
      },
      {
        tip: "Internal versus external is a common one-mark question",
        detail:
          "Internal comes from inside the business — savings, retained profit, selling assets. Everything else is external. Learn which list each item is on.",
      },
      {
        tip: "Always mention the control trade-off for shares",
        detail:
          "Share capital never has to be repaid, which sounds ideal until you note that the founder has permanently given away part of the business and its future profits.",
      },
      {
        tip: "Remember start-ups struggle to borrow",
        detail:
          "No trading record means no track record for a bank to assess. That is why savings, family, crowdfunding and grants dominate start-up answers.",
      },
      {
        tip: "Grants are free money with strings",
        detail:
          "No repayment and no interest, but they are competitive, slow to obtain, and restricted to specific spending. Say both sides.",
      },
      {
        tip: "Recommend ONE source and justify it",
        detail:
          "Evaluation questions want a decision. Name the source, link it to the amount needed and the owner's situation, and say why the alternatives are worse.",
      },
    ],
    practice: [
      {
        question: "Is retained profit an internal or external source of finance?",
        accept: ["internal", "internal finance", "internal source"],
        answer:
          "Internal. It is generated by the business itself, so there is no interest to pay and no ownership given away — which makes it the cheapest source available.",
      },
      {
        question: "Is a bank loan an internal or external source of finance?",
        accept: ["external", "external finance", "external source"],
        answer:
          "External, because it comes from outside the business. It must be repaid with interest whether or not the business performs well, which is what makes borrowing risky.",
      },
      {
        question: "What is the name for money raised by selling part-ownership of a company to investors?",
        accept: ["share capital", "shares", "sharecapital", "equity"],
        answer:
          "Share capital. It never has to be repaid, which is a real advantage, but the founder gives away a permanent share of both control and future profits.",
      },
      {
        question: "What is the name for raising small amounts of money from a large number of people online?",
        accept: ["crowdfunding", "crowd funding"],
        answer:
          "Crowdfunding. It has a second benefit beyond the money: if nobody backs the idea, that is useful market research obtained before anything was built.",
      },
      {
        question: "What is the name for an asset promised to a lender that can be taken if a loan is not repaid?",
        accept: ["collateral", "security"],
        answer:
          "Collateral, sometimes called security. Lenders ask for it because it reduces their risk — which is precisely why it increases the owner's.",
      },
      {
        question: "Renting equipment rather than buying it outright is called ______.",
        accept: ["leasing", "lease", "a lease"],
        answer:
          "Leasing. It avoids a large upfront payment and often includes maintenance, but over the full period it costs more than buying and you own nothing at the end.",
      },
      {
        question: "Paying for an asset in instalments and owning it at the end is called hire ______.",
        accept: ["purchase", "hire purchase"],
        answer:
          "Hire purchase. The key difference from leasing is ownership: with hire purchase the asset is yours once the final instalment is paid.",
      },
      {
        question: "What type of finance does NOT have to be repaid and has no interest?",
        accept: ["grant", "a grant", "government grant", "grants"],
        answer:
          "A government grant. The catch is that grants are competitive, slow to apply for, and usually restricted to particular purposes such as creating jobs in a specific area.",
      },
      {
        question: "Which source of finance is best suited to covering a short-term gap of a few weeks?",
        accept: ["overdraft", "an overdraft", "bank overdraft", "trade credit"],
        answer:
          "An overdraft, or trade credit. Both are short-term by design. Using a long-term loan for a temporary gap means paying interest for years on a problem that lasted a month.",
      },
      {
        question: "Which source of finance would be most appropriate for buying business premises?",
        accept: ["mortgage", "a mortgage", "long term loan", "long-term loan", "bank loan", "loan"],
        answer:
          "A mortgage — a long-term loan secured on the property itself. The rule is to match the length of the finance to the life of the asset it is buying.",
      },
      {
        question: "What is the long-term loan secured against property called?",
        accept: ["mortgage", "a mortgage"],
        answer:
          "A mortgage. Because it is secured on the building, interest rates are lower than for unsecured borrowing — but the lender can take the property if repayments stop.",
      },
      {
        question: "Give one drawback of using personal savings to fund a business.",
        accept: ["all at risk", "risk", "could lose it", "limited amount", "not enough", "personal loss", "opportunity cost", "loses savings"],
        answer:
          "The owner's own money is entirely at risk if the business fails, and there is usually a limited amount available — often not enough for real expansion.",
      },
      {
        question: "Investment by specialist investors in high-growth firms in exchange for a large share is called ______ capital.",
        accept: ["venture", "venture capital"],
        answer:
          "Venture capital. It brings large sums and often valuable experience, but investors usually want a substantial stake and a real say in how the business is run.",
      },
      {
        question: "True or false: a start-up finds it easy to get a bank loan.",
        accept: ["false", "f"],
        answer:
          "False. With no trading history a bank has nothing to assess, so start-ups are often refused or asked for personal collateral — which is why savings, family and crowdfunding dominate.",
      },
      {
        question: "Explain why a business might prefer a bank loan to selling shares. Write two or three sentences.",
        answer:
          "A loan is temporary: once it is repaid the relationship ends and the owner still owns 100% of the business and all its future profits. Selling shares means permanently giving away part of the ownership, a share of every future profit, and some control over decisions. The trade-off is risk — loan repayments and interest must be paid whether the business does well or badly, whereas shareholders are only rewarded if it succeeds. Mark this one yourself: credit yourself for control and permanence on one side, and for the repayment risk on the other.",
      },
      {
        question: "A start-up needs £15,000 for equipment. The owner has £4,000 in savings. Evaluate the best way to raise the rest.",
        answer:
          "A bank loan would suit the purpose, since equipment lasts several years and a loan spreads the cost over a similar period — but a start-up with no trading record may be refused, or asked for personal collateral, which puts the owner's own property at risk. Leasing the equipment avoids needing the £11,000 at all and spreads payments monthly, though it costs more overall and the business owns nothing at the end. Crowdfunding could raise the money without debt and test demand at the same time, but takes time and is far from guaranteed. Overall, leasing is probably the most realistic route for an unproven business because it needs no lender's approval and preserves the £4,000 of savings as a cash cushion — which, given how many start-ups fail from running out of cash, matters more than the extra long-run cost. Mark this one yourself: the top band needs the difficulty of borrowing as a START-UP recognised, and a justified recommendation.",
      },
      {
        question: "Which is an INTERNAL source of finance?",
        choices: [
          "Retained profit",
          "A bank loan",
          "A share issue",
          "A government grant",
        ],
        accept: [
          "Retained profit",
        ],
        answer: "Internal sources come from within the business — retained profit, selling assets, owner's capital. The rest are external.",
      },
      {
        question: "An advantage of a bank loan over an overdraft is that:",
        choices: [
          "Repayments are spread over a known period",
          "Interest is never charged",
          "It can be repaid whenever you like",
          "No security is ever needed",
        ],
        accept: [
          "Repayments are spread over a known period",
        ],
        answer: "Overdrafts suit short-term gaps but usually carry higher interest and can be withdrawn by the bank at short notice.",
      },
      {
        question: "A drawback of raising finance by issuing SHARES is:",
        choices: [
          "Ownership and control are diluted",
          "Interest must be repaid monthly",
          "It can only raise very small amounts",
          "The money must be repaid within a year",
        ],
        accept: [
          "Ownership and control are diluted",
        ],
        answer: "Shares need no repayment and pay dividends only when there is profit, but the original owners give up a share of the business.",
      },
      {
        question: "Trade credit means:",
        choices: [
          "Buying goods now and paying the supplier later",
          "Lending money to customers",
          "Selling shares to suppliers",
          "Borrowing from another business permanently",
        ],
        accept: [
          "Buying goods now and paying the supplier later",
        ],
        answer: "It is effectively an interest-free short-term loan, but late payment can damage the supplier relationship.",
      },
      {
        question: "Crowdfunding raises money by:",
        choices: [
          "Collecting small amounts from many people, usually online",
          "Borrowing from one large investor",
          "Selling company assets",
          "Taking a government loan",
        ],
        accept: [
          "Collecting small amounts from many people, usually online",
        ],
        answer: "It also tests demand before launch, but a failed campaign is public and the idea is exposed to competitors.",
      },
    ],
    misconceptions: [
      {
        wrong: "Share capital is free money because it never has to be repaid.",
        right:
          "It costs a permanent share of ownership, control and every future profit. Over a successful business's life that is usually far more expensive than loan interest.",
      },
      {
        wrong: "An overdraft is a good way to fund equipment.",
        right:
          "Overdrafts are short-term and expensive. Long-lasting assets need long-term finance such as a loan, lease or hire purchase — match the finance to the life of the asset.",
      },
      {
        wrong: "Retained profit is available to any business that needs it.",
        right:
          "Only to one that has already made a profit. A start-up has none, which is exactly why start-ups are so dependent on savings and external finance.",
      },
      {
        wrong: "Leasing is always cheaper than buying.",
        right:
          "It is cheaper up front and more expensive overall, and you own nothing at the end. It is a cash flow solution rather than a saving.",
      },
      {
        wrong: "A loan is an inflow of revenue.",
        right:
          "It is a cash inflow but not revenue. Revenue comes from sales; a loan is borrowed money that must be repaid with interest.",
      },
    ],
  },

  "business/stakeholders": {
    summary:
      "A stakeholder is anyone affected by what a business does — owners, workers, customers, suppliers, the local community, the government. They matter because their interests genuinely conflict: what is best for shareholders is often not what is best for employees or neighbours. Most of the difficult decisions in business, and most of the interesting exam questions, come from that conflict.",
    keyFacts: [
      {
        heading: "Who the stakeholders are",
        points: [
          "OWNERS AND SHAREHOLDERS — want profit, dividends and a rising value of their investment.",
          "EMPLOYEES — want fair pay, job security, good conditions and opportunities to progress.",
          "CUSTOMERS — want quality, low prices, choice and good service.",
          "SUPPLIERS — want regular orders, fair prices and to be paid on time.",
          "THE LOCAL COMMUNITY — wants jobs and investment, without pollution, traffic or noise.",
          "THE GOVERNMENT — wants tax revenue, employment, and businesses that obey the law.",
        ],
      },
      {
        heading: "Internal and external",
        points: [
          "INTERNAL stakeholders are inside the business: owners, managers and employees.",
          "EXTERNAL stakeholders are outside it: customers, suppliers, the community, government, lenders.",
          "Internal stakeholders usually have the most direct influence over decisions.",
          "External stakeholders influence through buying, lending, protesting, regulating or refusing to supply.",
          "Some stakeholders sit in both camps — an employee who also owns shares, for example.",
        ],
      },
      {
        heading: "Conflicting interests",
        points: [
          "Higher wages please employees and reduce the profit available to owners.",
          "Cutting costs by using a cheaper overseas supplier can raise profit while harming local suppliers and jobs.",
          "Lower prices please customers but reduce margins.",
          "Expanding a factory creates jobs but brings noise, traffic and disruption for neighbours.",
          "Paying suppliers later helps the business's cash flow and damages the supplier's.",
        ],
      },
      {
        heading: "Influence and response",
        points: [
          "Stakeholders with more POWER get more attention: a major customer or lender can insist, a neighbour usually cannot.",
          "Employees exercise influence through unions, through the quality of their work, and by leaving.",
          "Customers exercise it by taking their money elsewhere and by complaining publicly on social media.",
          "Pressure groups and media coverage can force change even without formal power.",
          "Businesses increasingly take stakeholder views seriously because reputation now affects sales directly.",
        ],
      },
    ],
    flashcards: [
      { term: "Stakeholder", definition: "Any individual or group affected by, or with an interest in, the activities of a business." },
      { term: "Internal stakeholder", definition: "A stakeholder inside the business, such as an owner, manager or employee." },
      { term: "External stakeholder", definition: "A stakeholder outside the business, such as a customer, supplier, lender or the local community." },
      { term: "Shareholder", definition: "A part-owner of a company who wants profit, dividends and a rising share value." },
      { term: "Dividend", definition: "A share of company profit paid out to shareholders." },
      { term: "Employee", definition: "A person who works for the business in exchange for pay." },
      { term: "Supplier", definition: "A business that provides goods or materials to another business." },
      { term: "Local community", definition: "The people living near a business, affected by its jobs, traffic, noise and environmental impact." },
      { term: "Pressure group", definition: "An organised group that campaigns to influence business or government behaviour." },
      { term: "Stakeholder conflict", definition: "A situation where satisfying one stakeholder group harms the interests of another." },
      { term: "Trade union", definition: "An organisation representing workers, negotiating pay and conditions on their behalf." },
      { term: "Corporate social responsibility", definition: "A business taking responsibility for its impact on society and the environment beyond what the law requires." },
      { term: "Reputation", definition: "How a business is regarded by customers and the public, which directly affects sales." },
      { term: "Stakeholder power", definition: "How much influence a stakeholder group has over a business's decisions." },
      { term: "Ethics", definition: "Moral principles about what is right and wrong, applied to business decisions." },
      { term: "Sustainability", definition: "Meeting present needs without damaging the ability of future generations to meet theirs." },
    ],
    examTips: [
      {
        tip: "Name the stakeholder AND their specific interest",
        detail:
          "'Employees are a stakeholder' scores nothing. 'Employees want job security, so the plan to automate the packing line threatens them' scores properly.",
      },
      {
        tip: "Conflict questions want BOTH sides",
        detail:
          "Say who gains, who loses and why. The mark is for showing the interests are genuinely opposed, not for listing groups.",
      },
      {
        tip: "Weigh stakeholders by their power",
        detail:
          "A bank that could withdraw a loan matters more than an anonymous complaint. Ranking stakeholders by influence is what top-band answers do.",
      },
      {
        tip: "Use the stakeholders in the case study",
        detail:
          "If the question mentions a village next to the site, write about the village. Generic stakeholder lists cannot earn application marks.",
      },
      {
        tip: "Remember shareholders and stakeholders are different words",
        detail:
          "Shareholders own shares. Stakeholders include shareholders and everybody else affected. Writing one when you mean the other is a costly slip.",
      },
      {
        tip: "Link ethics to profit, not against it",
        detail:
          "Treating stakeholders well often protects sales and reputation. Answers that show ethics and profit can align, rather than always clashing, read as more sophisticated.",
      },
    ],
    practice: [
      {
        question: "What is the general term for any group affected by a business's activities?",
        accept: ["stakeholder", "stakeholders", "a stakeholder"],
        answer:
          "Stakeholders. It is deliberately broad — owners, staff, customers, suppliers, neighbours and government are all included, which is why their interests so often conflict.",
      },
      {
        question: "Is an employee an internal or external stakeholder?",
        accept: ["internal", "internal stakeholder"],
        answer:
          "Internal. Owners, managers and employees are inside the business and generally have the most direct day-to-day influence over what it does.",
      },
      {
        question: "Is a supplier an internal or external stakeholder?",
        accept: ["external", "external stakeholder"],
        answer:
          "External. Suppliers sit outside the business but have real influence, because they can raise prices, delay deliveries or refuse credit.",
      },
      {
        question: "What is the main interest of shareholders in a company?",
        accept: ["profit", "dividends", "return", "profits", "money", "share value", "dividend"],
        answer:
          "Profit and dividends, plus a rising share value. They carry the risk of the investment, so they expect a return for it.",
      },
      {
        question: "What is the name for an organisation that represents workers in negotiations over pay?",
        accept: ["trade union", "union", "a trade union", "tradeunion"],
        answer:
          "A trade union. It gives employees collective bargaining power that no individual worker would have alone, which is the source of their influence.",
      },
      {
        question: "What is the name for an organised group campaigning to influence business behaviour?",
        accept: ["pressure group", "a pressure group", "pressuregroup"],
        answer:
          "A pressure group. They have no formal power over a business, but can generate publicity that damages reputation and therefore sales.",
      },
      {
        question: "What term describes a business taking responsibility for its impact on society and the environment?",
        accept: ["corporate social responsibility", "csr", "social responsibility"],
        answer:
          "Corporate social responsibility (CSR). It means going beyond the legal minimum, and businesses increasingly do it because customers and employees now expect it.",
      },
      {
        question: "Which stakeholder group is most interested in a business paying its taxes?",
        accept: ["government", "the government", "hmrc"],
        answer:
          "The government. It also wants businesses to create employment and obey the law, and it has real power through taxation and regulation to enforce this.",
      },
      {
        question: "Meeting present needs without damaging future generations' ability to meet theirs is called ______.",
        accept: ["sustainability", "sustainable", "sustainable development"],
        answer:
          "Sustainability. It matters commercially as well as ethically, because customers increasingly choose businesses that take it seriously.",
      },
      {
        question: "Raising employee wages most directly conflicts with which stakeholder group's interests?",
        accept: ["owners", "shareholders", "the owners", "owner", "shareholder"],
        answer:
          "Owners and shareholders, because higher wages reduce the profit available for dividends. It is the clearest example of stakeholder conflict in the course.",
      },
      {
        question: "True or false: shareholders and stakeholders mean the same thing.",
        accept: ["false", "f"],
        answer:
          "False. Shareholders own part of the company; stakeholders include shareholders AND everyone else affected — staff, customers, suppliers, neighbours, government.",
      },
      {
        question: "Name one thing the local community wants from a business near them.",
        accept: ["jobs", "employment", "investment", "no pollution", "less noise", "less traffic", "environment", "sponsorship", "low pollution"],
        answer:
          "Jobs and local investment, without pollution, noise or heavy traffic. Note that these pull in opposite directions — a bigger factory means more of both.",
      },
      {
        question: "How do customers most directly exercise influence over a business?",
        accept: ["stop buying", "go elsewhere", "not buying", "boycott", "complain", "spending", "buying elsewhere", "reviews", "social media"],
        answer:
          "By taking their money elsewhere, and increasingly by complaining publicly online where others can see. That combination makes reputation a financial issue, not just a moral one.",
      },
      {
        question: "Which stakeholder wants to be paid on time and given regular orders?",
        accept: ["suppliers", "supplier", "the suppliers"],
        answer:
          "Suppliers. A business that pays late to protect its own cash flow is directly damaging its supplier's, which is a neat example of one group's solution being another's problem.",
      },
      {
        question: "Explain why the interests of shareholders and employees often conflict. Write two or three sentences.",
        answer:
          "Shareholders want the largest possible profit, and wages are one of the biggest costs standing between revenue and that profit. Employees want higher pay, better conditions and secure jobs, all of which increase costs and reduce the profit available for dividends. The conflict is real rather than a misunderstanding — though it is not absolute, since well-paid, secure staff are often more productive and stay longer, which can raise profit in the long run. Mark this one yourself: credit yourself for the cost-versus-profit conflict, and give yourself extra credit if you noted that the interests can align over time.",
      },
      {
        question: "A supermarket plans to open a large store on the edge of a village. Evaluate the impact on its stakeholders.",
        answer:
          "Shareholders should gain from higher sales and profit if the location works. Customers in the village gain lower prices, more choice and convenience, saving journeys to a larger town. Employees gain new jobs, though possibly low-paid and part-time ones. The losers are clearer: existing local shops may close, which harms their owners and staff and could leave the village with less choice if the supermarket later withdraws; residents face more traffic, noise and light. Suppliers may gain volume but face pressure on prices and payment terms. Overall the balance depends on scale and location — a modest store with good access may benefit most groups, while a large one could hollow out the village centre. The most powerful stakeholders here are customers, since if enough of them shop there the other objections rarely stop it. Mark this one yourself: the top band needs winners AND losers, plus a judgement that depends on something specific like size or location.",
      },
      {
        question: "A STAKEHOLDER is:",
        choices: [
          "Anyone affected by or with an interest in the business",
          "Only someone who owns shares",
          "Only an employee",
          "Only a customer",
        ],
        accept: [
          "Anyone affected by or with an interest in the business",
        ],
        answer: "Owners, employees, customers, suppliers, the local community and government are all stakeholders. Shareholders are just one group.",
      },
      {
        question: "Which stakeholder is most interested in job security and pay?",
        choices: [
          "Employees",
          "Suppliers",
          "The local community",
          "Shareholders",
        ],
        accept: [
          "Employees",
        ],
        answer: "Shareholders focus on profit and dividends, suppliers on being paid on time, and the community on jobs and environmental impact.",
      },
      {
        question: "A conflict between shareholders and employees might arise over:",
        choices: [
          "Cutting wages to increase profit",
          "Improving product quality",
          "Opening a new website",
          "Changing the logo",
        ],
        accept: [
          "Cutting wages to increase profit",
        ],
        answer: "Stakeholder interests often pull in opposite directions, and businesses must judge whose interests to prioritise.",
      },
      {
        question: "Why do businesses consider the local community as a stakeholder?",
        choices: [
          "Their reaction affects reputation, planning permission and staff recruitment",
          "They own the business",
          "They set the prices",
          "They pay the wages",
        ],
        accept: [
          "Their reaction affects reputation, planning permission and staff recruitment",
        ],
        answer: "Noise, traffic and environmental impact can turn a community against a business in ways that cost real money.",
      },
      {
        question: "Suppliers are most concerned with:",
        choices: [
          "Being paid on time and receiving regular orders",
          "The colour of the packaging",
          "The number of shareholders",
          "Staff training programmes",
        ],
        accept: [
          "Being paid on time and receiving regular orders",
        ],
        answer: "A business that pays late may find suppliers demand cash upfront or refuse to trade with it at all.",
      },
    ],
    misconceptions: [
      {
        wrong: "Stakeholders and shareholders are the same thing.",
        right:
          "Shareholders own part of a company. Stakeholders are everyone affected by it, including shareholders, employees, customers, suppliers, neighbours and government.",
      },
      {
        wrong: "Businesses should always try to keep every stakeholder happy.",
        right:
          "Their interests genuinely conflict, so that is impossible. Businesses prioritise, usually according to how much power a group has over their success.",
      },
      {
        wrong: "Only large companies have stakeholders.",
        right:
          "A one-person business still has customers, suppliers, neighbours and HMRC. The groups are smaller, not absent.",
      },
      {
        wrong: "Being ethical always costs a business money.",
        right:
          "It can raise costs in the short term, but it also protects reputation, attracts customers and staff, and avoids fines. Ethics and profit often point the same way.",
      },
      {
        wrong: "The local community has no real power over a business.",
        right:
          "They can object to planning applications, generate press coverage and organise boycotts. Formal power is not the only kind that changes decisions.",
      },
    ],
  },

  // ─── YEAR 11 ────────────────────────────────────────────────────────────
  // Broadly "building a business": everything that changes once a firm is past
  // survival and starts to grow.

  "business/business-growth": {
    summary:
      "Growth is what most businesses say they want, and it is also what kills a surprising number of them. This topic covers the two routes — growing yourself or buying someone else — the cost advantages that come with size, the problems that arrive with it, and why a business that grows too fast can run out of cash at the exact moment it looks most successful.",
    keyFacts: [
      {
        heading: "Two routes to growth",
        points: [
          "ORGANIC (internal) growth: expanding using the business's own resources — more outlets, more products, new markets, more staff.",
          "Organic growth is slower, cheaper and easier to control, and it is funded largely from retained profit.",
          "EXTERNAL (inorganic) growth: joining with another business, through a merger or a takeover.",
          "A MERGER is two businesses agreeing to combine into one. A TAKEOVER is one buying control of another, and need not be friendly.",
          "External growth is fast but expensive, and combining two different workforces and cultures often goes badly.",
        ],
      },
      {
        heading: "Economies and diseconomies of scale",
        points: [
          "ECONOMIES OF SCALE: as output rises, the cost of producing each unit falls.",
          "PURCHASING economies — buying materials in bulk at a discount, which is the most common example.",
          "TECHNICAL economies — expensive machinery becomes worth buying once output is high enough to use it fully.",
          "Other sources: cheaper borrowing for large firms, specialist managers, and marketing spread over more units.",
          "DISECONOMIES of scale: beyond a point, unit costs rise again through poor communication, slow decisions and staff feeling like a number.",
        ],
      },
      {
        heading: "Types of integration",
        points: [
          "HORIZONTAL integration: joining with a business at the same stage of the same industry, such as two supermarkets.",
          "VERTICAL integration: joining with a business at a different stage of the same supply chain.",
          "FORWARD vertical means moving towards the customer, such as a farm buying a shop.",
          "BACKWARD vertical means moving towards the supplier, such as a coffee chain buying a plantation.",
          "DIVERSIFICATION: moving into an unrelated market, which spreads risk but takes the business away from what it knows.",
        ],
      },
      {
        heading: "The problems growth brings",
        points: [
          "OVERTRADING: growing faster than the cash available to fund it, which is a leading cause of failure in successful businesses.",
          "Loss of control as the owner can no longer make every decision personally.",
          "Communication gets slower and more distorted as more layers are added.",
          "Company culture and customer service often suffer as the personal touch disappears.",
          "Bigger businesses attract more regulation, more scrutiny and more media attention.",
        ],
      },
    ],
    flashcards: [
      { term: "Organic growth", definition: "Growth from within, using the business's own resources to expand — also called internal growth." },
      { term: "External growth", definition: "Growth by joining with another business through a merger or takeover — also called inorganic growth." },
      { term: "Merger", definition: "Two businesses agreeing to combine to form a single new business." },
      { term: "Takeover", definition: "One business buying enough shares in another to gain control of it." },
      { term: "Economies of scale", definition: "The fall in average cost per unit that comes from producing on a larger scale." },
      { term: "Purchasing economies", definition: "Lower cost per unit from buying materials in bulk at a discount." },
      { term: "Technical economies", definition: "Lower unit costs from using specialist machinery that only pays off at high output." },
      { term: "Diseconomies of scale", definition: "The rise in average cost per unit when a business becomes too large to manage efficiently." },
      { term: "Horizontal integration", definition: "Joining with a business at the same stage of the same industry." },
      { term: "Vertical integration", definition: "Joining with a business at a different stage of the same supply chain." },
      { term: "Forward vertical integration", definition: "Joining with a business closer to the customer, such as a manufacturer buying a retailer." },
      { term: "Backward vertical integration", definition: "Joining with a business closer to the supplier, such as a retailer buying a factory." },
      { term: "Diversification", definition: "Moving into a different market or product area to spread risk." },
      { term: "Overtrading", definition: "Expanding faster than the available cash allows, causing a cash flow crisis despite rising sales." },
      { term: "Average cost per unit", definition: "Total costs divided by the number of units produced." },
      { term: "Multinational", definition: "A business that operates in more than one country." },
    ],
    examTips: [
      {
        tip: "Organic versus external is the first split",
        detail:
          "Organic is slow, cheap and controllable; external is fast, expensive and risky. Naming which route the business in the case study is taking frames the whole answer.",
      },
      {
        tip: "Say WHICH economy of scale you mean",
        detail:
          "'Economies of scale' on its own is vague. 'Purchasing economies, because ordering ten times the flour earns a bulk discount' is specific and scores.",
      },
      {
        tip: "Direction matters in vertical integration",
        detail:
          "Forward is towards the customer, backward is towards the supplier. Get the direction the wrong way round and the mark is lost even though you knew the term.",
      },
      {
        tip: "Link growth back to cash flow",
        detail:
          "Overtrading is the connection examiners most want to see: growth costs money now and pays later, so a growing business often needs finance precisely when it looks healthiest.",
      },
      {
        tip: "Remember diseconomies exist",
        detail:
          "Answers that treat bigger as automatically better cap themselves. Communication, motivation and decision speed all get worse with size.",
      },
      {
        tip: "Growth is a choice, not an obligation",
        detail:
          "Plenty of owners deliberately stay small to keep control and quality. If the case study says so, use it — that is a legitimate and well-credited judgement.",
      },
    ],
    workedExamples: [
      {
        question:
          "A bakery makes 2,000 loaves a month at a total cost of £5,000. After expanding it makes 6,000 loaves at a total cost of £12,000. Show whether it has achieved economies of scale.",
        steps: [
          "Average cost per unit = total costs ÷ number of units.",
          "Before: £5,000 ÷ 2,000 = £2.50 per loaf.",
          "After: £12,000 ÷ 6,000 = £2.00 per loaf.",
          "The average cost per unit has FALLEN by 50p, so yes — this is an economy of scale.",
        ],
        answer: "Average cost fell from £2.50 to £2.00 per loaf, so economies of scale have been achieved",
      },
    ],
    practice: [
      {
        question: "Growth using a business's own resources, without buying another firm, is called ______ growth.",
        accept: ["organic", "internal", "organic growth", "internal growth"],
        answer:
          "Organic growth, also called internal growth. It is slower but cheaper and far easier to control, and it is usually funded out of retained profit.",
      },
      {
        question: "Two businesses agreeing to combine into one new business is called a ______.",
        accept: ["merger", "a merger"],
        answer:
          "A merger. The distinction from a takeover is agreement: in a merger both sides want it, whereas a takeover can be resisted by the business being bought.",
      },
      {
        question: "One business buying control of another is called a ______.",
        accept: ["takeover", "a takeover", "acquisition"],
        answer:
          "A takeover. It happens by buying more than half the shares, which is why public limited companies are more exposed to it than private ones.",
      },
      {
        question: "The fall in average cost per unit as output rises is called economies of ______.",
        accept: ["scale", "economies of scale"],
        answer:
          "Economies of scale. Always name which type — purchasing, technical, financial or marketing — because the specific mechanism is what earns the analysis mark.",
      },
      {
        question: "Buying materials in bulk to get a discount is which type of economy of scale?",
        accept: ["purchasing", "purchasing economies", "bulk buying", "bulk"],
        answer:
          "Purchasing economies. It is the most common example and the one small businesses most obviously lack, which is why they struggle to compete on price.",
      },
      {
        question: "A supermarket buying another supermarket is which type of integration?",
        accept: ["horizontal", "horizontal integration"],
        answer:
          "Horizontal integration — joining with a business at the same stage of the same industry. It increases market share quickly and removes a competitor at the same time.",
      },
      {
        question: "A coffee chain buying the farm that grows its beans is which type of integration?",
        accept: ["backward vertical", "backward", "backward vertical integration", "vertical"],
        answer:
          "Backward vertical integration — moving towards the supplier. It secures supply and cuts out the supplier's profit margin, but ties up capital in an unfamiliar business.",
      },
      {
        question: "A manufacturer buying a chain of shops to sell its own products is which type of integration?",
        accept: ["forward vertical", "forward", "forward vertical integration"],
        answer:
          "Forward vertical integration — moving towards the customer. It captures the retailer's margin and gives direct control over how the product is presented and priced.",
      },
      {
        question: "When a business grows so fast that it runs out of cash, this is called ______.",
        accept: ["overtrading", "over trading"],
        answer:
          "Overtrading. It is the reason a business can fail at the moment it looks most successful — stock, staff and premises are all paid for before the extra sales bring cash in.",
      },
      {
        question: "The rise in unit costs when a business becomes too big to manage well is called ______ of scale.",
        accept: ["diseconomies", "diseconomies of scale"],
        answer:
          "Diseconomies of scale. The causes are human rather than technical: slower communication, slower decisions, and staff who feel anonymous and lose motivation.",
      },
      {
        question: "Moving into a completely different market to spread risk is called ______.",
        accept: ["diversification", "diversifying"],
        answer:
          "Diversification. It protects against a downturn in one market, but takes the business into an area where it has no expertise and no reputation.",
      },
      {
        question: "Total costs are £12,000 for 4,000 units. Calculate the average cost per unit in pounds. Give the number only.",
        accept: ["3"],
        answer:
          "£3. Average cost per unit = total costs ÷ units = 12,000 ÷ 4,000. Comparing this figure before and after expansion is how you prove economies of scale exist.",
      },
      {
        question: "Total costs are £18,000 for 9,000 units. Calculate the average cost per unit in pounds. Give the number only.",
        accept: ["2"],
        answer:
          "£2. 18,000 ÷ 9,000 = £2. If this business previously produced fewer units at a higher average cost, it has achieved economies of scale.",
      },
      {
        question: "A business that operates in more than one country is called a ______.",
        accept: ["multinational", "a multinational", "mnc", "transnational"],
        answer:
          "A multinational. Operating across borders brings access to bigger markets and cheaper production, along with exchange rate risk and far more complex regulation.",
      },
      {
        question: "Explain why a business might grow organically rather than by takeover. Write two or three sentences.",
        answer:
          "Organic growth can be funded from retained profit, so the business avoids taking on large debt or selling shares and losing control. It is also far easier to manage: the existing culture, systems and staff expand gradually rather than two different organisations having to be merged. The trade-off is speed — a competitor growing by acquisition can take market share much faster. Mark this one yourself: credit yourself for cost, control and culture on one side, and for acknowledging the slower pace.",
      },
      {
        question: "A successful chain of three restaurants plans to open eight more within a year. Evaluate the risks.",
        answer:
          "The biggest risk is overtrading: eight sites means paying deposits, fit-out costs, stock and wages long before any of them earn, so cash flow could collapse even while sales rise. Quality and culture are the second risk — the owner cannot personally supervise eleven kitchens, so the consistency that made the original three successful may not survive. There is also demand risk: the three existing sites may have taken the best locations, and eight more could cannibalise each other. Growing more slowly, funding each site from the profits of the last, would reduce all three risks at the cost of letting competitors move first. Overall, expanding this fast is high risk unless external finance is secured in advance AND a management structure is put in place. Mark this one yourself: the top band needs overtrading named, plus a realistic alternative and a conditional judgement.",
      },
      {
        question: "ORGANIC growth means expanding by:",
        choices: [
          "Increasing sales and opening new outlets internally",
          "Merging with another business",
          "Taking over a rival",
          "Selling shares to a competitor",
        ],
        accept: [
          "Increasing sales and opening new outlets internally",
        ],
        answer: "Organic growth is slower but easier to control. External growth through takeover is faster but riskier.",
      },
      {
        question: "A MERGER differs from a takeover because:",
        choices: [
          "Two businesses agree to combine into one",
          "One business buys another against its wishes",
          "It always involves a foreign company",
          "No money changes hands ever",
        ],
        accept: [
          "Two businesses agree to combine into one",
        ],
        answer: "Takeovers can be hostile. Both routes often struggle with clashing cultures and systems afterwards.",
      },
      {
        question: "Economies of scale mean that as output rises:",
        choices: [
          "Average cost per unit falls",
          "Total costs fall",
          "Revenue automatically rises",
          "Quality always improves",
        ],
        accept: [
          "Average cost per unit falls",
        ],
        answer: "Bulk buying, specialised staff and spreading fixed costs all help. Growing too far can cause DIS-economies of scale.",
      },
      {
        question: "Which is a risk of growing too quickly?",
        choices: [
          "Cash flow problems and loss of control",
          "Lower staff turnover",
          "Reduced competition",
          "Falling fixed costs",
        ],
        accept: [
          "Cash flow problems and loss of control",
        ],
        answer: "Overtrading — expanding faster than the cash to support it — has closed many otherwise successful businesses.",
      },
      {
        question: "Diversification means growing by:",
        choices: [
          "Moving into new products or new markets",
          "Selling more of the same product",
          "Cutting the product range",
          "Reducing prices",
        ],
        accept: [
          "Moving into new products or new markets",
        ],
        answer: "It spreads risk across different markets, but the business may lack expertise in the new area.",
      },
    ],
    misconceptions: [
      {
        wrong: "Bigger businesses always have lower costs per unit.",
        right:
          "Only up to a point. Past it, diseconomies of scale set in — communication slows, decisions take longer and motivation falls, pushing unit costs back up.",
      },
      {
        wrong: "A merger and a takeover are the same thing.",
        right:
          "A merger is agreed by both sides. A takeover is one business buying control of another and can be resisted by the target's board.",
      },
      {
        wrong: "Growing sales means the business is financially safe.",
        right:
          "Growth consumes cash before it produces it. Overtrading kills profitable, fast-growing businesses precisely when they look most successful.",
      },
      {
        wrong: "Vertical integration means joining with a competitor.",
        right:
          "That is horizontal. Vertical means a different stage of the SAME supply chain — a supplier or a retailer, not a rival.",
      },
      {
        wrong: "Every business wants to grow.",
        right:
          "Many owners deliberately stay small to protect quality, control and their own working hours. If the case study says so, that is the answer.",
      },
    ],
  },

  "business/globalisation-and-trade": {
    summary:
      "Globalisation is the reason a phone designed in California, made from parts across Asia, is sold in a shop in Sheffield. This topic covers why trade between countries has grown so fast, what it means for UK businesses — bigger markets, but also competitors from everywhere — and how exchange rates, tariffs and trade blocs change the sums.",
    keyFacts: [
      {
        heading: "What globalisation is and why it grew",
        points: [
          "Globalisation is the increasing connection of economies through trade, investment and technology.",
          "Cheaper and faster transport, especially container shipping, cut the cost of moving goods enormously.",
          "The internet made it possible to sell, coordinate and manage across borders instantly.",
          "Trade barriers have fallen through trade agreements and organisations such as the World Trade Organization.",
          "Businesses can now produce wherever it is cheapest and sell wherever demand is highest.",
        ],
      },
      {
        heading: "Opportunities and threats for UK businesses",
        points: [
          "IMPORTS are goods and services bought in from abroad; EXPORTS are those sold abroad.",
          "Opportunity: access to a market of billions rather than 68 million.",
          "Opportunity: cheaper raw materials and components, and the option of producing overseas.",
          "Threat: competition from businesses in countries with much lower wage costs.",
          "Threat: greater exposure to events elsewhere — a factory closure or shipping disruption abroad stops production here.",
        ],
      },
      {
        heading: "Barriers to trade",
        points: [
          "A TARIFF is a tax on imported goods, making them more expensive and protecting domestic producers.",
          "A QUOTA is a physical limit on how much of a product may be imported.",
          "Other barriers include product standards, paperwork, customs checks and licensing requirements.",
          "A TRADE BLOC is a group of countries that have agreed to reduce or remove barriers between them.",
          "Barriers protect domestic jobs but raise prices for consumers and invite retaliation from other countries.",
        ],
      },
      {
        heading: "Exchange rates",
        points: [
          "An exchange rate is the price of one currency in terms of another.",
          "A STRONG pound buys more foreign currency, making IMPORTS cheaper and EXPORTS dearer abroad.",
          "A WEAK pound makes EXPORTS cheaper abroad and IMPORTS more expensive.",
          "The memory aid is SPICED: Strong Pound, Imports Cheap, Exports Dear.",
          "Exchange rates move constantly, so a business trading abroad faces uncertainty in both its costs and its revenue.",
        ],
      },
    ],
    flashcards: [
      { term: "Globalisation", definition: "The growing connection of economies worldwide through trade, investment and technology." },
      { term: "Import", definition: "A good or service bought from a business in another country." },
      { term: "Export", definition: "A good or service sold to a customer in another country." },
      { term: "Tariff", definition: "A tax placed on imported goods, making them more expensive." },
      { term: "Quota", definition: "A physical limit on the quantity of a product that may be imported." },
      { term: "Trade barrier", definition: "Anything that makes trading between countries harder or more expensive." },
      { term: "Trade bloc", definition: "A group of countries that has agreed to reduce trade barriers between its members." },
      { term: "Exchange rate", definition: "The price of one currency expressed in terms of another." },
      { term: "Strong pound", definition: "A pound that buys more foreign currency, making imports cheaper and exports dearer abroad." },
      { term: "Weak pound", definition: "A pound that buys less foreign currency, making exports cheaper abroad and imports dearer." },
      { term: "SPICED", definition: "Strong Pound, Imports Cheap, Exports Dear — a memory aid for exchange rate effects." },
      { term: "Multinational company", definition: "A business with operations in more than one country." },
      { term: "Outsourcing", definition: "Paying another business, often abroad, to carry out work previously done in-house." },
      { term: "Offshoring", definition: "Moving part of a business's own operations to another country." },
      { term: "Supply chain", definition: "The whole sequence of businesses involved in producing and delivering a product." },
      { term: "Free trade", definition: "Trade between countries without tariffs, quotas or other barriers." },
    ],
    examTips: [
      {
        tip: "Learn SPICED and write it down in the exam",
        detail:
          "Strong Pound, Imports Cheap, Exports Dear. Exchange rate questions are worth reliable marks and the direction is the only hard part.",
      },
      {
        tip: "Say who WINS and who LOSES from a rate change",
        detail:
          "A weak pound helps exporters and hurts importers. A business that does both is affected in both directions — say so if the case study allows.",
      },
      {
        tip: "Tariffs and quotas are different",
        detail:
          "A tariff is a TAX making imports dearer; a quota is a LIMIT on quantity. Using the words interchangeably costs marks.",
      },
      {
        tip: "Balance opportunity against threat",
        detail:
          "Globalisation gives a UK firm a bigger market AND more competitors. Answers that give only one side cannot reach the higher bands.",
      },
      {
        tip: "Apply it to the size of the business",
        detail:
          "A small firm can now export through a website, which was impossible thirty years ago; it also now competes with Chinese sellers on the same platform.",
      },
      {
        tip: "Remember exchange rates cut both ways for one business",
        detail:
          "An exporter that buys imported components gains on sales and loses on costs when the pound falls. That nuance is a top-band point.",
      },
    ],
    practice: [
      {
        question: "A good bought from a business in another country is called an ______.",
        accept: ["import", "an import", "imports"],
        answer:
          "An import. The easy way to keep them straight: imports come IN to the country, exports go out. Confusing the two wrecks exchange rate answers.",
      },
      {
        question: "A tax placed on imported goods is called a ______.",
        accept: ["tariff", "a tariff", "tariffs"],
        answer:
          "A tariff. It protects domestic producers by making foreign goods dearer, but raises prices for consumers and often provokes retaliation from other countries.",
      },
      {
        question: "A physical limit on the quantity of a product that can be imported is called a ______.",
        accept: ["quota", "a quota", "quotas"],
        answer:
          "A quota. Unlike a tariff it does not raise money for the government — it simply caps how much may come in, whatever the price.",
      },
      {
        question: "What does the S in SPICED stand for?",
        accept: ["strong", "strong pound"],
        answer:
          "Strong. SPICED means Strong Pound, Imports Cheap, Exports Dear — worth writing in the margin as soon as an exchange rate question appears.",
      },
      {
        question: "If the pound gets stronger, do imports become cheaper or more expensive?",
        accept: ["cheaper", "cheap", "less expensive"],
        answer:
          "Cheaper. A stronger pound buys more foreign currency, so the same foreign goods cost fewer pounds — the I and C of SPICED.",
      },
      {
        question: "If the pound gets weaker, do UK exports become cheaper or more expensive for foreign buyers?",
        accept: ["cheaper", "cheap", "less expensive"],
        answer:
          "Cheaper. Foreign buyers need less of their own currency to buy the same pound-priced goods, which usually increases demand for UK exports.",
      },
      {
        question: "A group of countries that has agreed to reduce trade barriers between them is called a trade ______.",
        accept: ["bloc", "block", "trade bloc"],
        answer:
          "A trade bloc. Members trade freely with each other while keeping barriers against outsiders, which is why membership matters so much to exporters.",
      },
      {
        question: "Paying another business, often abroad, to do work you used to do yourself is called ______.",
        accept: ["outsourcing", "outsource"],
        answer:
          "Outsourcing. It cuts costs and lets a business focus on what it does best, but hands over control of quality and creates dependence on another firm.",
      },
      {
        question: "Moving part of your own operations to another country is called ______.",
        accept: ["offshoring", "offshore"],
        answer:
          "Offshoring. The difference from outsourcing is ownership: with offshoring the work is still yours, just done somewhere else.",
      },
      {
        question: "Trade between countries without tariffs or quotas is called ______ trade.",
        accept: ["free", "free trade"],
        answer:
          "Free trade. It lowers prices and widens choice for consumers, while exposing domestic producers to competitors who may have far lower costs.",
      },
      {
        question: "Name one reason globalisation has increased.",
        accept: ["cheaper transport", "internet", "technology", "containerisation", "shipping", "trade agreements", "fewer barriers", "communication", "lower barriers"],
        answer:
          "Cheaper transport (especially container shipping), the internet, and trade agreements removing barriers. All three reduced the cost of doing business across borders.",
      },
      {
        question: "The whole sequence of businesses involved in producing and delivering a product is called the supply ______.",
        accept: ["chain", "supply chain"],
        answer:
          "The supply chain. Globalisation made them longer and cheaper — and more fragile, since a disruption anywhere along it stops production everywhere after it.",
      },
      {
        question: "True or false: a weak pound is good news for a UK business that imports all its materials.",
        accept: ["false", "f"],
        answer:
          "False. A weak pound makes imports MORE expensive, so its costs rise. It would be good news for the same business's export sales — which is why both sides must be considered.",
      },
      {
        question: "Give one threat globalisation poses to a UK business.",
        accept: ["competition", "cheaper foreign competitors", "low wage competition", "supply chain disruption", "exchange rates", "competitors", "foreign competition"],
        answer:
          "Competition from countries with far lower wage costs, and greater exposure to disruption elsewhere in a long international supply chain.",
      },
      {
        question: "Explain how a fall in the value of the pound affects a UK business that exports furniture but imports its wood. Write two or three sentences.",
        answer:
          "Its exports become cheaper for foreign buyers, so demand and sales revenue are likely to rise. But the imported wood becomes more expensive in pounds, so its costs rise at the same time. The overall effect depends on which is larger — if the extra sales outweigh the higher material costs, profit rises; if not, it falls. Mark this one yourself: full marks need BOTH effects and the point that they pull in opposite directions.",
      },
      {
        question: "A UK clothing manufacturer is considering moving production abroad. Evaluate the decision.",
        answer:
          "Moving abroad could cut wage costs dramatically, which matters in an industry where labour is a large share of cost and competitors have already done it — staying may simply not be viable on price. Against that: quality control is far harder at a distance, lead times lengthen, the supply chain becomes vulnerable to shipping disruption and exchange rate movements, and there is reputational risk if working conditions are poor. Some customers will pay a premium for UK-made goods, so the business could instead compete on quality, speed and provenance rather than price. Overall the right answer depends on the market segment: for a mass-market brand competing on price, offshoring may be necessary; for a premium brand, it would destroy the very thing customers are paying for. Mark this one yourself: the top band needs the recommendation to depend on which market the firm is in.",
      },
      {
        question: "Which term describes a tax placed on imported goods?",
        choices: [
          "A tariff",
          "A quota",
          "A subsidy",
          "An embargo",
        ],
        accept: [
          "A tariff",
        ],
        answer: "A quota limits the QUANTITY of imports instead. Both are trade barriers that make imports less competitive.",
      },
      {
        question: "Which is a benefit of globalisation for a UK business?",
        choices: [
          "Access to much larger overseas markets",
          "Guaranteed higher profits",
          "No competition from abroad",
          "Lower taxes automatically",
        ],
        accept: [
          "Access to much larger overseas markets",
        ],
        answer: "It also brings cheaper supplies and labour, but exposes the business to far more competition at home.",
      },
      {
        question: "A weak pound makes UK exports:",
        choices: [
          "Cheaper for foreign buyers",
          "More expensive for foreign buyers",
          "Unchanged in price",
          "Impossible to sell",
        ],
        accept: [
          "Cheaper for foreign buyers",
        ],
        answer: "Imports become more expensive at the same time, which raises costs for businesses buying materials from abroad.",
      },
      {
        question: "A MULTINATIONAL is a business that:",
        choices: [
          "Operates in more than one country",
          "Sells to customers abroad only online",
          "Employs foreign workers in one country",
          "Is owned by a foreign government",
        ],
        accept: [
          "Operates in more than one country",
        ],
        answer: "Multinationals bring investment and jobs, but can also be criticised over tax, working conditions and local competition.",
      },
      {
        question: "Which factor has most enabled globalisation in recent decades?",
        choices: [
          "Improvements in transport and digital communication",
          "Higher tariffs worldwide",
          "Fewer trading blocs",
          "Reduced internet access",
        ],
        accept: [
          "Improvements in transport and digital communication",
        ],
        answer: "Containerisation and the internet made it practical to coordinate production and sales across continents.",
      },
    ],
    misconceptions: [
      {
        wrong: "A strong pound is always good for the UK economy.",
        right:
          "It makes imports cheaper but UK exports dearer abroad, which hurts exporters and the jobs that depend on them. 'Strong' describes the rate, not the benefit.",
      },
      {
        wrong: "Tariffs and quotas mean the same thing.",
        right:
          "A tariff is a tax that makes imports more expensive; a quota is a limit on how many may enter at all. Only the tariff raises government revenue.",
      },
      {
        wrong: "Globalisation only helps big multinational companies.",
        right:
          "A one-person business can now sell worldwide through a website or marketplace. It also now competes with sellers worldwide, so the effect runs both ways.",
      },
      {
        wrong: "Outsourcing and offshoring are the same.",
        right:
          "Outsourcing means another business does the work; offshoring means you do it yourself in another country. You can do either, both, or neither.",
      },
      {
        wrong: "Exchange rate changes affect either costs or revenue, not both.",
        right:
          "A business that exports and imports is hit in both directions at once, and the net effect depends on which side is larger. That is exactly the nuance top answers show.",
      },
    ],
  },

  "business/ethics-and-the-environment": {
    summary:
      "Businesses face decisions where the profitable choice and the right choice point in different directions — cheaper suppliers with worse conditions, packaging that sells well but does not decompose. This topic is about those trade-offs, and about the increasingly important fact that customers now notice, which means ethics and profit align more often than they used to.",
    keyFacts: [
      {
        heading: "Business ethics",
        points: [
          "Ethics means doing what is morally right, which is not always the same as what is legal or profitable.",
          "Common ethical issues: pay and conditions in the supply chain, child labour, animal testing, honest advertising, tax avoidance.",
          "Acting ethically usually raises costs in the short term — fair wages and audited suppliers cost more.",
          "It can raise revenue too: customers pay more for fair trade goods, and staff prefer working for businesses they respect.",
          "Reputation damage from an ethical scandal can cost far more than the saving that caused it.",
        ],
      },
      {
        heading: "Environmental impacts",
        points: [
          "Businesses affect the environment through pollution, carbon emissions, waste, packaging and resource use.",
          "SUSTAINABILITY means meeting present needs without preventing future generations from meeting theirs.",
          "Reducing impact: recycling, less packaging, renewable energy, efficient transport, repairable products.",
          "Many environmental measures cut costs as well — using less energy and less material is cheaper.",
          "Others cost more: recycled materials and renewable energy can be more expensive than the alternatives.",
        ],
      },
      {
        heading: "Pressure to change",
        points: [
          "Customers increasingly choose businesses on ethical and environmental grounds, especially younger customers.",
          "Pressure groups and journalists expose poor practice, and social media spreads it in hours.",
          "Employees, particularly skilled ones, prefer employers whose values they share.",
          "Governments legislate: emissions limits, waste rules, minimum wage, plastic charges.",
          "Investors increasingly assess environmental and social performance alongside financial returns.",
        ],
      },
      {
        heading: "The trade-offs",
        points: [
          "GREENWASHING is claiming to be environmentally responsible without genuinely being so, and it is a serious reputational risk when discovered.",
          "Short-term costs versus long-term reputation is the central tension in this topic.",
          "Small businesses often cannot afford ethical premiums that large ones absorb easily.",
          "Ethical choices can also be a competitive advantage and a strong USP.",
          "Doing the minimum the law requires is legal; whether it is enough is a separate question.",
        ],
      },
    ],
    flashcards: [
      { term: "Business ethics", definition: "Moral principles applied to business decisions — doing what is right, not only what is legal or profitable." },
      { term: "Ethical business", definition: "One that considers the moral impact of its decisions on people, animals and the environment." },
      { term: "Sustainability", definition: "Meeting present needs without damaging the ability of future generations to meet theirs." },
      { term: "Corporate social responsibility", definition: "A business taking responsibility for its impact on society and the environment beyond legal requirements." },
      { term: "Fair trade", definition: "A scheme guaranteeing producers in developing countries a fair minimum price for their goods." },
      { term: "Supply chain ethics", definition: "Responsibility for the conditions under which suppliers produce goods, not only the business's own site." },
      { term: "Carbon footprint", definition: "The total greenhouse gas emissions caused by a business's activities." },
      { term: "Greenwashing", definition: "Making misleading claims about environmental responsibility to appear greener than the business really is." },
      { term: "Recycling", definition: "Processing used materials so they can be made into new products." },
      { term: "Renewable energy", definition: "Energy from sources that do not run out, such as wind, solar and hydroelectric power." },
      { term: "Pollution", definition: "The release of harmful substances into the air, water or land." },
      { term: "Pressure group", definition: "An organised group campaigning to change business or government behaviour." },
      { term: "Tax avoidance", definition: "Using legal methods to reduce a tax bill — legal, but often seen as unethical." },
      { term: "Tax evasion", definition: "Illegally failing to pay tax that is owed." },
      { term: "Ethical consumer", definition: "A customer whose buying decisions are influenced by a business's moral and environmental record." },
      { term: "Reputation", definition: "How a business is regarded by customers and the public, which directly affects sales." },
    ],
    examTips: [
      {
        tip: "Know the difference between legal and ethical",
        detail:
          "Tax avoidance is legal and widely regarded as unethical; tax evasion is illegal. Questions here often turn on exactly that gap.",
      },
      {
        tip: "Don't assume ethics always costs money",
        detail:
          "Less packaging, less energy and less waste are all cheaper. The strongest answers separate the measures that save money from the ones that cost it.",
      },
      {
        tip: "Use reputation as the link to profit",
        detail:
          "Ethical behaviour protects sales; a scandal destroys them. Framing ethics as commercially rational, not just morally nice, reads as more sophisticated.",
      },
      {
        tip: "Consider whether the business can afford it",
        detail:
          "A small firm on thin margins may genuinely be unable to pay an ethical premium. Recognising that constraint is worth marks in evaluation.",
      },
      {
        tip: "Name greenwashing when the case study hints at it",
        detail:
          "Vague claims like 'eco-friendly' with nothing behind them are a real risk. Spotting it is a strong evaluative point.",
      },
      {
        tip: "Different stakeholders want different things",
        detail:
          "Shareholders may resist the cost; customers and staff may demand the change. Linking this topic to stakeholder conflict lifts the answer.",
      },
    ],
    practice: [
      {
        question: "Meeting present needs without damaging future generations' ability to meet theirs is called ______.",
        accept: ["sustainability", "sustainable development", "sustainable"],
        answer:
          "Sustainability. It applies to more than the environment — a business that burns out its staff or squeezes suppliers to breaking point is also unsustainable.",
      },
      {
        question: "Making misleading claims about being environmentally friendly is called ______.",
        accept: ["greenwashing", "green washing"],
        answer:
          "Greenwashing. It is dangerous precisely because it works until it is exposed, at which point the business loses the customers its claims attracted.",
      },
      {
        question: "Using legal methods to reduce a tax bill is called tax ______.",
        accept: ["avoidance", "tax avoidance"],
        answer:
          "Tax avoidance. It is legal, which is exactly what makes it an ethical question rather than a legal one — and public anger about it is real.",
      },
      {
        question: "Illegally failing to pay tax that is owed is called tax ______.",
        accept: ["evasion", "tax evasion"],
        answer:
          "Tax evasion. This one is a crime, not an ethical grey area. Mixing up avoidance and evasion is a common and costly error.",
      },
      {
        question: "The total greenhouse gas emissions caused by a business is called its carbon ______.",
        accept: ["footprint", "carbon footprint"],
        answer:
          "Carbon footprint. Reducing it often reduces costs too, since less energy and less transport mean lower bills as well as lower emissions.",
      },
      {
        question: "A scheme guaranteeing producers in developing countries a fair minimum price is called ______ trade.",
        accept: ["fair", "fair trade", "fairtrade"],
        answer:
          "Fair trade. It raises costs for the business but allows a higher selling price, and gives a clear ethical USP that competitors cannot simply copy overnight.",
      },
      {
        question: "Energy from sources that do not run out, such as wind and solar, is called ______ energy.",
        accept: ["renewable", "renewable energy"],
        answer:
          "Renewable energy. It can cost more up front than fossil fuels but protects a business from energy price spikes, so the case is partly financial.",
      },
      {
        question: "A customer whose purchases are influenced by a business's moral record is called an ______ consumer.",
        accept: ["ethical", "ethical consumer"],
        answer:
          "An ethical consumer. There are more of them every year, which is the main reason ethical behaviour has become commercially rational and not just morally admirable.",
      },
      {
        question: "True or false: everything that is legal is also ethical.",
        accept: ["false", "f"],
        answer:
          "False, and this is the heart of the topic. Tax avoidance and paying the legal minimum wage in a country with no safety rules are both legal and widely judged unethical.",
      },
      {
        question: "Name one environmental measure that also SAVES a business money.",
        accept: ["less packaging", "less energy", "recycling", "reduce waste", "energy efficiency", "less transport", "reusing", "insulation", "less material"],
        answer:
          "Using less packaging, less energy or less material, and cutting waste. These reduce bills at the same time as emissions, which makes them the easiest measures to justify.",
      },
      {
        question: "Responsibility for the conditions under which your suppliers produce goods is called supply chain ______.",
        accept: ["ethics", "supply chain ethics", "responsibility"],
        answer:
          "Supply chain ethics. It matters because customers hold the brand responsible for conditions in factories it does not own — 'we did not know' is not accepted as a defence.",
      },
      {
        question: "What is the name for a business taking responsibility for its impact beyond what the law requires?",
        accept: ["corporate social responsibility", "csr", "social responsibility"],
        answer:
          "Corporate social responsibility (CSR). The phrase 'beyond what the law requires' is the important part — complying with the law is the floor, not the achievement.",
      },
      {
        question: "Give one group that pressures businesses to behave more ethically.",
        accept: ["customers", "pressure groups", "employees", "government", "media", "investors", "consumers", "journalists", "shareholders"],
        answer:
          "Customers, employees, pressure groups, the media, investors and government. Their power differs, but social media has made even small groups able to cause real damage.",
      },
      {
        question: "True or false: acting ethically always reduces a business's profits.",
        accept: ["false", "f"],
        answer:
          "False. Some measures cut costs directly, and ethical reputation can raise prices, retain staff and win customers. It can reduce short-term profit while raising long-term profit.",
      },
      {
        question: "Explain why a business might choose a more expensive but more ethical supplier. Write two or three sentences.",
        answer:
          "The higher cost buys protection against reputational disaster: if a cheap supplier is found to use child labour, the damage to sales and brand can dwarf the money saved. Many customers will also pay more for a product they know was made fairly, so the extra cost can be passed on. And staff and investors increasingly prefer businesses whose practices they can defend publicly. Mark this one yourself: credit yourself for reputation risk and for the possibility of charging a premium.",
      },
      {
        question: "A clothing retailer could halve its costs by switching to a supplier with poor working conditions. Evaluate whether it should.",
        answer:
          "The financial case is obvious — halving supply costs would transform margins and could be the difference between competing on price and losing to rivals who have already done it. But the risks are severe: if conditions are exposed by journalists or a pressure group, sales can collapse in days, and the brand damage lasts years. Customers hold retailers responsible for factories they do not own. There is also the straightforward moral point that profiting from unsafe or exploitative work is wrong regardless of whether anyone finds out. A middle path exists: negotiate with the supplier to improve conditions, audit them, and accept a smaller saving. Overall the retailer should not switch on those terms — the saving is real but the downside risk is existential and the ethical objection stands on its own. Mark this one yourself: full marks need the commercial risk AND the moral argument, plus a realistic alternative.",
      },
      {
        question: "Business ethics are concerned with:",
        choices: [
          "Doing what is morally right, beyond the legal minimum",
          "Obeying the law only",
          "Maximising profit at any cost",
          "Following competitors' behaviour",
        ],
        accept: [
          "Doing what is morally right, beyond the legal minimum",
        ],
        answer: "Ethical choices often raise costs in the short term but can build reputation and customer loyalty over time.",
      },
      {
        question: "Which is an example of an ethical business decision?",
        choices: [
          "Paying suppliers in developing countries a fair price",
          "Using the cheapest supplier regardless of conditions",
          "Advertising misleading claims",
          "Avoiding all taxes legally",
        ],
        accept: [
          "Paying suppliers in developing countries a fair price",
        ],
        answer: "It raises costs, so the business is betting that customers value it enough to pay more or buy more often.",
      },
      {
        question: "Sustainability in business means:",
        choices: [
          "Meeting present needs without harming future generations",
          "Making a profit every single year",
          "Keeping the same products forever",
          "Growing as fast as possible",
        ],
        accept: [
          "Meeting present needs without harming future generations",
        ],
        answer: "It covers resource use, emissions and waste, and increasingly affects which customers and investors a business attracts.",
      },
      {
        question: "A criticism of businesses claiming to be 'green' is that they may be:",
        choices: [
          "Greenwashing, overstating environmental credentials",
          "Paying too much tax",
          "Employing too many staff",
          "Selling too cheaply",
        ],
        accept: [
          "Greenwashing, overstating environmental credentials",
        ],
        answer: "It risks serious reputational damage if exposed, and regulators increasingly challenge unsupported claims.",
      },
      {
        question: "Reducing packaging typically:",
        choices: [
          "Cuts costs and environmental impact at the same time",
          "Always increases costs",
          "Reduces product quality",
          "Requires more transport",
        ],
        accept: [
          "Cuts costs and environmental impact at the same time",
        ],
        answer: "This is why environmental measures are not always a trade-off — some cut waste and cost together.",
      },
    ],
    misconceptions: [
      {
        wrong: "If something is legal, it is ethical.",
        right:
          "Tax avoidance is legal and widely condemned. The law sets a minimum standard; ethics asks whether that minimum is good enough.",
      },
      {
        wrong: "Being ethical always costs a business money.",
        right:
          "Cutting waste, packaging and energy saves money immediately. Others cost more but protect sales and reputation, which is a return rather than a cost.",
      },
      {
        wrong: "A business is only responsible for its own factories.",
        right:
          "Customers hold brands responsible for their whole supply chain. 'Our supplier did it' has never worked as a public defence.",
      },
      {
        wrong: "Saying you're eco-friendly is enough.",
        right:
          "That is greenwashing if nothing backs it up, and being caught costs more than never claiming it. Claims need evidence.",
      },
    ],
  },

  "business/the-economic-climate": {
    summary:
      "No business exists in isolation from the wider economy. Interest rates change what borrowing costs, inflation changes what everything costs, unemployment changes who can afford your product, and taxation changes what is left at the end. This topic is about forces no business controls but every business has to plan around.",
    keyFacts: [
      {
        heading: "Interest rates",
        points: [
          "The interest rate is the cost of borrowing money, or the reward for saving it.",
          "The Bank of England sets the base rate, which influences what banks charge everyone else.",
          "HIGHER rates mean loans and mortgages cost more, so businesses invest less and consumers spend less.",
          "Businesses with large loans or overdrafts are hit hardest, because their costs rise immediately.",
          "LOWER rates encourage borrowing, investment and spending, which usually increases demand.",
        ],
      },
      {
        heading: "Inflation",
        points: [
          "Inflation is a sustained rise in the general level of prices, measured by the Consumer Prices Index.",
          "It raises a business's costs: materials, energy, and wage demands from staff.",
          "Businesses must decide whether to absorb higher costs, cutting margins, or pass them on, risking lost sales.",
          "It reduces the real value of money, so customers can afford less with the same income.",
          "Very low or negative inflation brings its own problems, as customers delay purchases expecting lower prices.",
        ],
      },
      {
        heading: "Unemployment and incomes",
        points: [
          "Unemployment means people who want work cannot find it.",
          "High unemployment reduces total spending, so demand falls, especially for luxuries.",
          "It makes recruitment easier and cheaper, because more people apply for each job.",
          "Rising incomes increase demand, particularly for non-essential goods and services.",
          "Demand for necessities changes far less with income than demand for luxuries.",
        ],
      },
      {
        heading: "Taxation and the business cycle",
        points: [
          "Income tax reduces what consumers have to spend; VAT raises the price of goods.",
          "Corporation tax is charged on company profits, reducing what is left to reinvest or distribute.",
          "The BUSINESS CYCLE runs: growth (boom), slowdown, recession, recovery.",
          "In a boom, demand and confidence rise; in a recession they fall and businesses focus on survival.",
          "Some businesses are counter-cyclical — discount retailers and repair services can do BETTER in a downturn.",
        ],
      },
    ],
    flashcards: [
      { term: "Interest rate", definition: "The cost of borrowing money, or the reward for saving it, expressed as a percentage." },
      { term: "Base rate", definition: "The interest rate set by the Bank of England, which influences all other rates." },
      { term: "Inflation", definition: "A sustained rise in the general level of prices over time." },
      { term: "Consumer Prices Index (CPI)", definition: "The main measure of inflation in the UK, tracking the price of a typical basket of goods." },
      { term: "Deflation", definition: "A sustained fall in the general level of prices." },
      { term: "Unemployment", definition: "People who are willing and able to work but cannot find a job." },
      { term: "Recession", definition: "A period of falling output and reduced economic activity, usually with rising unemployment." },
      { term: "Boom", definition: "A period of strong economic growth, high confidence and rising demand." },
      { term: "Business cycle", definition: "The repeating pattern of growth, slowdown, recession and recovery in an economy." },
      { term: "Disposable income", definition: "The money a household has left to spend after tax has been deducted." },
      { term: "Corporation tax", definition: "A tax charged on the profits of a company." },
      { term: "VAT", definition: "Value Added Tax — a tax added to the price of most goods and services." },
      { term: "Income tax", definition: "A tax on the money people earn, which reduces their disposable income." },
      { term: "Consumer confidence", definition: "How optimistic people feel about their finances, which strongly affects spending." },
      { term: "Luxury good", definition: "A product whose demand rises sharply when incomes rise and falls sharply when they fall." },
      { term: "Necessity", definition: "A product people buy regardless of income changes, such as basic food." },
    ],
    examTips: [
      {
        tip: "Trace the chain, don't just name the change",
        detail:
          "'Interest rates rise, so mortgage payments rise, so households have less to spend, so demand for our non-essential product falls.' Each link is a mark.",
      },
      {
        tip: "Ask whether the product is a luxury or a necessity",
        detail:
          "A recession devastates a jeweller and barely touches a bread supplier. This single distinction decides most answers in this topic.",
      },
      {
        tip: "Remember some businesses GAIN in a downturn",
        detail:
          "Discount retailers, repair shops and budget brands often grow in a recession. Noting that is a strong evaluative point.",
      },
      {
        tip: "Interest rates hit borrowers hardest",
        detail:
          "A business with a large loan or overdraft feels a rate rise immediately in its costs. One with no debt feels it only through customer demand.",
      },
      {
        tip: "Inflation is a cost problem AND a demand problem",
        detail:
          "It raises what the business pays and reduces what customers can afford. Answers covering both sides score higher.",
      },
      {
        tip: "Don't quote a current rate from memory",
        detail:
          "Rates and inflation figures change constantly. Describe the direction and effect rather than risking an out-of-date number.",
      },
    ],
    practice: [
      {
        question: "What is the name for a sustained rise in the general level of prices?",
        accept: ["inflation"],
        answer:
          "Inflation. It hurts a business twice: costs rise, and customers can afford less with the same income, so demand may fall at the same time.",
      },
      {
        question: "Which organisation sets the UK base interest rate?",
        accept: ["bank of england", "the bank of england", "boe"],
        answer:
          "The Bank of England. Its base rate influences what every bank charges, so a change ripples through mortgages, loans and business overdrafts.",
      },
      {
        question: "What is the main UK measure of inflation called?",
        accept: ["cpi", "consumer prices index", "consumer price index"],
        answer:
          "The Consumer Prices Index (CPI). It tracks the price of a typical basket of goods and services over time, which is how a single inflation figure is produced.",
      },
      {
        question: "A period of falling output and reduced economic activity is called a ______.",
        accept: ["recession", "a recession"],
        answer:
          "A recession. Demand falls, unemployment rises, and most businesses shift their aim from growth back to survival.",
      },
      {
        question: "The money a household has left after tax is called ______ income.",
        accept: ["disposable", "disposable income"],
        answer:
          "Disposable income. It is the figure that actually drives spending, which is why an income tax rise reduces demand even though it is not a tax on businesses.",
      },
      {
        question: "What tax is charged on company profits?",
        accept: ["corporation tax", "corporationtax"],
        answer:
          "Corporation tax. A rise reduces what is left for reinvestment or dividends, so it affects a business's ability to grow as well as its owners' returns.",
      },
      {
        question: "What tax is added to the price of most goods and services in the UK?",
        accept: ["vat", "value added tax"],
        answer:
          "VAT — Value Added Tax. Because it is added to prices, a VAT rise makes goods dearer for customers and can reduce demand even though the business keeps none of it.",
      },
      {
        question: "If interest rates rise, is business investment likely to increase or decrease?",
        accept: ["decrease", "decreases", "fall", "falls", "reduce", "go down", "lower", "decline"],
        answer:
          "Decrease. Borrowing costs more, so fewer expansion projects are worth doing, and existing loan repayments take money that might have funded them.",
      },
      {
        question: "A product whose demand rises sharply when incomes rise is called a ______ good.",
        accept: ["luxury", "luxury good"],
        answer:
          "A luxury good. Businesses selling luxuries are hit hardest in a recession, which is why this distinction decides most answers in this topic.",
      },
      {
        question: "A sustained FALL in the general level of prices is called ______.",
        accept: ["deflation"],
        answer:
          "Deflation. It sounds welcome but causes customers to delay purchases in the expectation of lower prices still, which reduces demand and can deepen a downturn.",
      },
      {
        question: "The repeating pattern of boom, slowdown, recession and recovery is called the business ______.",
        accept: ["cycle", "business cycle", "economic cycle"],
        answer:
          "The business cycle. Knowing which stage the economy is in tells you whether customers are confident and spending or cautious and saving.",
      },
      {
        question: "How optimistic people feel about their finances is called consumer ______.",
        accept: ["confidence", "consumer confidence"],
        answer:
          "Consumer confidence. It matters because spending depends on how secure people FEEL, not only on what they earn — worried people save even when their income is unchanged.",
      },
      {
        question: "Name one type of business that may do BETTER during a recession.",
        accept: ["discount", "discount retailer", "budget", "repair", "pound shop", "charity shop", "value brands", "second hand", "supermarket"],
        answer:
          "Discount retailers, budget brands, repair services and second-hand shops. Customers trade down rather than stopping spending, so these businesses gain their custom.",
      },
      {
        question: "True or false: high unemployment makes it harder for a business to recruit staff.",
        accept: ["false", "f"],
        answer:
          "False. High unemployment means more people applying for each vacancy, so recruitment is easier and wages may be lower. The problem it causes is falling demand, not staffing.",
      },
      {
        question: "Explain how a rise in interest rates could reduce sales for a furniture shop. Write two or three sentences.",
        answer:
          "Higher rates raise mortgage and loan repayments, so households have less disposable income left each month. Furniture is a postponable purchase — an old sofa can last another year — so it is exactly the kind of spending people cut first. The shop may also find its own borrowing costs have risen at the same time, squeezing it from both directions. Mark this one yourself: credit yourself for the chain from rates to disposable income to postponable spending.",
      },
      {
        question: "A business selling premium kitchens expects a recession. Evaluate how it should respond.",
        answer:
          "Premium kitchens are a luxury and highly postponable, so demand is likely to fall sharply — planning for it is sensible rather than pessimistic. It could introduce a cheaper range to capture customers trading down, though that risks damaging the premium brand it has built. It could cut costs and reduce stock to protect cash flow, which is the safest immediate step, but cutting marketing may lose ground to competitors who keep spending. It could also target segments less affected by the downturn, such as landlords or wealthier customers whose incomes are more secure. Overall, protecting cash flow first and targeting more resilient customers is the strongest combination; launching a budget range should be a last resort because the brand is the asset. Mark this one yourself: the top band needs the luxury/necessity point, at least two responses weighed, and a judgement.",
      },
      {
        question: "What happens to consumer spending during a RECESSION?",
        choices: [
          "It usually falls as incomes and confidence drop",
          "It always rises sharply",
          "It stays exactly the same",
          "It becomes illegal",
        ],
        accept: [
          "It usually falls as incomes and confidence drop",
        ],
        answer: "Businesses selling luxuries suffer most. Some, such as discount retailers, can actually grow in a downturn.",
      },
      {
        question: "If interest rates RISE, businesses are likely to:",
        choices: [
          "Borrow less and delay investment",
          "Borrow much more",
          "See customer spending increase",
          "Pay less on existing variable loans",
        ],
        accept: [
          "Borrow less and delay investment",
        ],
        answer: "Consumers with mortgages also have less to spend, so demand falls at the same time as borrowing costs rise.",
      },
      {
        question: "INFLATION means:",
        choices: [
          "The general rise in prices over time",
          "A rise in unemployment",
          "A fall in the value of exports",
          "An increase in production",
        ],
        accept: [
          "The general rise in prices over time",
        ],
        answer: "It raises the cost of raw materials and wage demands, and squeezes customers' real spending power.",
      },
      {
        question: "Rising unemployment usually means:",
        choices: [
          "Lower consumer demand but a larger pool of available workers",
          "Higher consumer spending",
          "Fewer applicants for jobs",
          "Higher wages across the economy",
        ],
        accept: [
          "Lower consumer demand but a larger pool of available workers",
        ],
        answer: "So the same change can hurt sales while making recruitment easier and cheaper.",
      },
      {
        question: "How might a business respond to a downturn in the economy?",
        choices: [
          "Cut costs and focus on value-for-money products",
          "Raise all prices sharply",
          "Increase spending on luxury lines",
          "Stop all marketing permanently",
        ],
        accept: [
          "Cut costs and focus on value-for-money products",
        ],
        answer: "Cutting too deeply can damage quality and reputation, making recovery harder once demand returns.",
      },
    ],
    misconceptions: [
      {
        wrong: "Inflation just means things cost more for customers.",
        right:
          "It raises the business's own costs too — materials, energy and wages. Businesses face it from both sides at once.",
      },
      {
        wrong: "A recession is bad for every business.",
        right:
          "Discount retailers, repair services and budget brands often grow, because customers trade down rather than stopping spending entirely.",
      },
      {
        wrong: "Interest rate rises only affect businesses with loans.",
        right:
          "They also reduce customer spending, because mortgages and credit cost more. A debt-free business still sees demand fall.",
      },
      {
        wrong: "High unemployment is bad for a business in every way.",
        right:
          "Demand falls, but recruitment becomes easier and cheaper. Balanced answers note both.",
      },
      {
        wrong: "Deflation is good because things get cheaper.",
        right:
          "It encourages customers to delay purchases waiting for lower prices, which reduces demand and can make a downturn worse.",
      },
    ],
  },

  "business/business-and-the-law": {
    summary:
      "The law sets the floor a business has to stand on: how it must treat customers, how it must treat staff, and what it may claim about its products. Breaking these rules brings fines, compensation claims and public damage — and the rules are not optional, which is what separates this topic from the ethics one next to it.",
    keyFacts: [
      {
        heading: "Consumer law",
        points: [
          "The Consumer Rights Act 2015 is the main law protecting customers buying goods and services.",
          "Goods must be of SATISFACTORY QUALITY, FIT FOR PURPOSE, and AS DESCRIBED.",
          "Customers have a short-term right to reject faulty goods and get a refund, usually within 30 days.",
          "Services must be carried out with reasonable care and skill, in a reasonable time, for a reasonable price.",
          "Descriptions and advertising must not be misleading, and the Advertising Standards Authority polices this.",
        ],
      },
      {
        heading: "Employment law",
        points: [
          "The National Minimum Wage and National Living Wage set legal minimum hourly pay, which varies by age and changes each April.",
          "The Equality Act 2010 makes discrimination unlawful on grounds including age, sex, race, disability, religion and sexual orientation.",
          "Employees are entitled to a written contract, paid holiday and rest breaks.",
          "Rules cover unfair dismissal, redundancy pay, and notice periods.",
          "Health and safety law requires employers to protect staff from avoidable risk through training, equipment and safe systems.",
        ],
      },
      {
        heading: "Why the law matters commercially",
        points: [
          "Fines and compensation can be large enough to threaten a small business's survival.",
          "Legal action is slow, expensive and distracting even when the business wins.",
          "Publicity from a case damages reputation with customers and future employees.",
          "Compliance costs money: training, equipment, record-keeping and sometimes higher wages.",
          "But it also produces benefits — safer workplaces have fewer accidents, and fair treatment reduces staff turnover.",
        ],
      },
      {
        heading: "Data and other regulation",
        points: [
          "Data protection law controls how personal information is collected, stored and used, with significant fines for breaches.",
          "Businesses must tell people what data they hold and delete it on request.",
          "Environmental regulation covers waste, emissions, packaging and disposal.",
          "Licensing rules apply to particular trades, such as selling alcohol or handling food.",
          "The law sets a MINIMUM standard; ethics asks whether that minimum is enough.",
        ],
      },
    ],
    flashcards: [
      { term: "Consumer Rights Act 2015", definition: "The main UK law protecting customers, requiring goods to be of satisfactory quality, fit for purpose and as described." },
      { term: "Satisfactory quality", definition: "Goods must meet the standard a reasonable person would expect, given the price and description." },
      { term: "Fit for purpose", definition: "Goods must do the job they are sold to do." },
      { term: "As described", definition: "Goods must match the description, sample or model shown to the customer." },
      { term: "Equality Act 2010", definition: "The law making discrimination unlawful on grounds such as age, sex, race, disability and religion." },
      { term: "Discrimination", definition: "Treating someone less favourably because of a protected characteristic." },
      { term: "National Minimum Wage", definition: "The legal minimum hourly rate an employer must pay, varying by age." },
      { term: "National Living Wage", definition: "The higher legal minimum hourly rate for workers above a set age." },
      { term: "Unfair dismissal", definition: "Ending someone's employment without a fair reason or a fair procedure." },
      { term: "Redundancy", definition: "Dismissal because the job itself is no longer needed, which carries a right to redundancy pay." },
      { term: "Health and safety law", definition: "Rules requiring employers to protect employees from avoidable risks at work." },
      { term: "Data protection", definition: "The legal rules governing how personal information may be collected, stored and used." },
      { term: "Advertising Standards Authority", definition: "The body that regulates advertising in the UK and can order misleading adverts to be withdrawn." },
      { term: "Contract of employment", definition: "The legal agreement setting out an employee's pay, hours, duties and rights." },
      { term: "Tribunal", definition: "A legal body that hears employment disputes such as unfair dismissal or discrimination claims." },
      { term: "Compliance", definition: "Meeting the requirements of the law and relevant regulations." },
    ],
    examTips: [
      {
        tip: "Learn the three consumer rights as a trio",
        detail:
          "Satisfactory quality, fit for purpose, as described. They come up constantly and are quick, reliable marks when quoted exactly.",
      },
      {
        tip: "Name the law where you can",
        detail:
          "'The Consumer Rights Act 2015' or 'the Equality Act 2010' shows precision. Being unsure of a date is fine — naming the wrong Act is not.",
      },
      {
        tip: "Give the cost of compliance AND the benefit",
        detail:
          "Safety training costs money and reduces accidents, sick pay and insurance premiums. Both sides are needed for the higher bands.",
      },
      {
        tip: "Link legal risk to a small business's survival",
        detail:
          "A fine or tribunal award that a supermarket absorbs could close a firm with three employees. Scale matters in evaluation.",
      },
      {
        tip: "Keep law and ethics separate",
        detail:
          "Law is the minimum you must do; ethics is what you should do. Questions often sit exactly on that boundary, so be clear which one you are answering.",
      },
      {
        tip: "Don't quote current wage rates from memory",
        detail:
          "The National Living Wage changes every April. Describe how it works rather than risking a figure that is a year out of date.",
      },
    ],
    practice: [
      {
        question: "Which Act is the main UK law protecting customers who buy goods and services?",
        accept: ["consumer rights act", "consumer rights act 2015", "the consumer rights act"],
        answer:
          "The Consumer Rights Act 2015. Its three core requirements — satisfactory quality, fit for purpose, as described — are worth memorising word for word.",
      },
      {
        question: "Goods must do the job they are sold to do. This requirement is called fit for ______.",
        accept: ["purpose", "fit for purpose"],
        answer:
          "Fit for purpose. A waterproof coat that leaks fails this test even if it is well made and exactly as pictured, because it does not do its job.",
      },
      {
        question: "Goods must match what the customer was told. This requirement is called 'as ______'.",
        accept: ["described", "as described"],
        answer:
          "As described. It covers the advert, the label, the sample and anything a salesperson said, which is why misleading descriptions are a legal problem and not just a moral one.",
      },
      {
        question: "Which Act makes discrimination unlawful on grounds such as age, race and disability?",
        accept: ["equality act", "equality act 2010", "the equality act"],
        answer:
          "The Equality Act 2010. It applies to recruitment, pay, promotion and dismissal, so it shapes every stage of how a business treats its staff.",
      },
      {
        question: "The legal minimum hourly rate an employer must pay is called the National Minimum ______.",
        accept: ["wage", "national minimum wage", "minimum wage"],
        answer:
          "The National Minimum Wage, with a higher National Living Wage for older workers. Both change each April, so never quote a rate from memory in an exam.",
      },
      {
        question: "Ending someone's employment without a fair reason or procedure is called unfair ______.",
        accept: ["dismissal", "unfair dismissal"],
        answer:
          "Unfair dismissal. Note that the PROCEDURE matters as much as the reason — a fair reason handled badly can still lose a tribunal case.",
      },
      {
        question: "Dismissal because the job itself is no longer needed is called ______.",
        accept: ["redundancy", "being made redundant", "redundant"],
        answer:
          "Redundancy. It is lawful when genuine, and carries a right to redundancy pay based on age and length of service.",
      },
      {
        question: "Which body regulates advertising in the UK?",
        accept: ["advertising standards authority", "asa"],
        answer:
          "The Advertising Standards Authority (ASA). It can order misleading adverts to be withdrawn, and the publicity around that is often worse than the ruling itself.",
      },
      {
        question: "A legal body that hears employment disputes is called a ______.",
        accept: ["tribunal", "employment tribunal", "a tribunal"],
        answer:
          "An employment tribunal. Even a case the business wins costs management time, legal fees and reputation, which is why prevention is far cheaper than defence.",
      },
      {
        question: "What is the legal agreement setting out an employee's pay, hours and duties called?",
        accept: ["contract of employment", "employment contract", "contract"],
        answer:
          "A contract of employment. Employees are legally entitled to written particulars of it, and disputes usually start with what it does or does not say.",
      },
      {
        question: "Meeting the requirements of the law and relevant regulations is called ______.",
        accept: ["compliance", "complying", "legal compliance"],
        answer:
          "Compliance. It costs money in training, equipment and record-keeping, which is a real burden on small firms — but non-compliance costs far more when it goes wrong.",
      },
      {
        question: "Which area of law controls how a business stores customers' personal information?",
        accept: ["data protection", "gdpr", "data protection law", "uk gdpr"],
        answer:
          "Data protection law. Fines for serious breaches are large enough to matter to any business, and customers now expect to be told what is held about them.",
      },
      {
        question: "True or false: the law tells a business the maximum standard it should aim for.",
        accept: ["false", "f"],
        answer:
          "False. The law sets the MINIMUM. Doing only what is legally required is lawful, but whether it is good enough is an ethical question, not a legal one.",
      },
      {
        question: "Give one cost to a business of following health and safety law.",
        accept: ["training", "equipment", "time", "cost of equipment", "protective equipment", "record keeping", "money", "inspections"],
        answer:
          "Training, protective equipment, safer machinery, inspections and record-keeping all cost money and time — though they also reduce accidents, sick pay and insurance premiums.",
      },
      {
        question: "Explain why following employment law can benefit a business as well as costing it money. Write two or three sentences.",
        answer:
          "Fair pay, safe conditions and proper procedures reduce staff turnover, so the business spends less on constant recruitment and training. Fewer accidents mean less sick pay, lower insurance and no lost production. It also avoids tribunal claims, which cost management time and damage reputation with customers and future applicants even when the business wins. Mark this one yourself: credit yourself for retention, accident costs and reputation.",
      },
      {
        question: "A small café owner says health and safety rules are too expensive for a business her size. Evaluate that view.",
        answer:
          "There is something in it: compliance costs are largely fixed, so training, equipment and record-keeping take a much larger share of a small firm's revenue than a chain's, and the paperwork falls on an owner already doing five jobs. But the argument fails on the risks. A single serious accident or food poisoning case could bring a fine, a compensation claim and closure — losses a small business is least able to absorb, precisely because it has no reserves. Insurance premiums and staff turnover also fall when conditions are good. Overall the cost is a genuine burden but the alternative is worse for her than for a large firm, so the view is understandable but mistaken. Mark this one yourself: the top band needs the point that small firms are MORE exposed to the downside, not less.",
      },
    ],
    misconceptions: [
      {
        wrong: "Consumer rights only apply if the shop offers a guarantee.",
        right:
          "The Consumer Rights Act applies automatically to every sale. A guarantee is extra, offered voluntarily on top of rights the customer already has.",
      },
      {
        wrong: "Employment law only applies to big companies.",
        right:
          "Minimum wage, discrimination and health and safety law apply from the first employee. Size changes the resources available, not the obligations.",
      },
      {
        wrong: "If a dismissal has a good reason, it cannot be unfair.",
        right:
          "The procedure matters too. A fair reason handled without warnings, evidence or a hearing can still be ruled unfair dismissal.",
      },
      {
        wrong: "Obeying the law means a business is behaving ethically.",
        right:
          "The law is a minimum standard. Plenty of legal practices — aggressive tax avoidance, paying exactly the minimum wage — are widely judged unethical.",
      },
    ],
  },

  "business/production-processes": {
    summary:
      "How something gets made decides what it costs, how quickly it arrives and how much it can be customised. This topic covers the three main production methods, the idea of productivity, and lean production — the deliberate hunt for anything in a process that costs money without adding value.",
    keyFacts: [
      {
        heading: "The three production methods",
        points: [
          "JOB production: one item made at a time, to order — a wedding cake, a bespoke suit, a house extension.",
          "Job production allows full customisation and high prices, but is slow with a high cost per unit.",
          "BATCH production: identical items made in groups, with the equipment reset between batches — bread, clothing sizes, paint colours.",
          "FLOW production: items made continuously on a production line, identical and in huge numbers — cars, drinks, packaged food.",
          "Flow gives the lowest unit cost through economies of scale, but needs enormous investment and offers no flexibility.",
        ],
      },
      {
        heading: "Productivity and efficiency",
        points: [
          "PRODUCTIVITY = output ÷ number of workers (or hours worked). It measures how much each worker produces.",
          "Higher productivity lowers the labour cost per unit, which is why businesses invest so heavily in it.",
          "Productivity can be raised through training, better equipment, improved layout and better motivation.",
          "EFFICIENCY means producing with the least waste of time, materials and money.",
          "Productivity is not the same as working harder — usually it means working with better tools or a better process.",
        ],
      },
      {
        heading: "Lean production",
        points: [
          "Lean production means cutting out anything that uses resources without adding value for the customer.",
          "The main wastes: overproduction, waiting, unnecessary transport, excess stock, defects and unnecessary movement.",
          "JUST IN TIME (JIT) stock control: materials arrive exactly when needed, so almost nothing is stored.",
          "KAIZEN, or continuous improvement: many small improvements suggested by the workers who do the job.",
          "Lean reduces cost and waste, but leaves no slack — a single late delivery can stop the whole line.",
        ],
      },
      {
        heading: "Choosing a method",
        points: [
          "The right method depends on the size of the order, the price customers will pay and how standard the product is.",
          "Customisation and craftsmanship point towards job production; volume points towards flow.",
          "Technology has blurred the boundaries: machines can now switch between variants far more cheaply than before.",
          "Automation raises output and consistency, reduces labour costs, and requires large upfront investment.",
          "It also reduces jobs, which is a genuine stakeholder issue rather than a footnote.",
        ],
      },
    ],
    flashcards: [
      { term: "Job production", definition: "Producing one item at a time, usually made to a customer's specific order." },
      { term: "Batch production", definition: "Producing identical items in groups, with equipment reset between batches." },
      { term: "Flow production", definition: "Producing items continuously on a production line, in large identical quantities." },
      { term: "Productivity", definition: "Output per worker or per hour — a measure of how much is produced from the resources used." },
      { term: "Efficiency", definition: "Producing with the minimum waste of time, materials and money." },
      { term: "Lean production", definition: "An approach that removes anything using resources without adding value for the customer." },
      { term: "Just in time (JIT)", definition: "A stock system where materials arrive exactly when needed, so almost no stock is held." },
      { term: "Kaizen", definition: "Continuous improvement through many small changes, often suggested by the workers themselves." },
      { term: "Waste", definition: "Anything in a process that uses resources without adding value for the customer." },
      { term: "Automation", definition: "Using machinery and computers to carry out tasks previously done by people." },
      { term: "Capacity", definition: "The maximum output a business can produce with its current resources." },
      { term: "Capacity utilisation", definition: "The proportion of maximum possible output that is actually being produced, as a percentage." },
      { term: "Unit cost", definition: "The average cost of producing one unit: total costs divided by output." },
      { term: "Economies of scale", definition: "The fall in average cost per unit that comes from producing on a larger scale." },
      { term: "Mass production", definition: "Producing very large quantities of a standardised product, usually by flow production." },
      { term: "Bespoke", definition: "Made specifically for one customer to their own requirements." },
    ],
    examTips: [
      {
        tip: "Match the method to the product",
        detail:
          "Wedding cakes are job; bread is batch; cola is flow. Justify the choice using what the case study actually sells rather than describing all three.",
      },
      {
        tip: "Learn the productivity formula and use it",
        detail:
          "Output ÷ number of workers. Calculation marks here are straightforward, and the figure supports the argument you are making.",
      },
      {
        tip: "Give the drawback of lean production",
        detail:
          "No spare stock means no cushion. One late delivery or one machine failure stops everything — that fragility is the standard evaluation point.",
      },
      {
        tip: "Automation is a stakeholder question too",
        detail:
          "Higher output and lower costs please owners; job losses affect employees and the local community. Mentioning both lifts the answer.",
      },
      {
        tip: "Don't confuse productivity with production",
        detail:
          "Production is how much is made. Productivity is how much is made per worker. A business can raise production while productivity falls.",
      },
      {
        tip: "Consider the cost of switching method",
        detail:
          "Moving to flow production needs enormous investment and only pays off at high volume. Whether the business can afford it is often the real question.",
      },
    ],
    workedExamples: [
      {
        question:
          "A factory with 12 workers produces 3,600 units a week. Calculate productivity per worker, then find the new figure if training raises output to 4,800 with the same staff.",
        steps: [
          "Productivity = output ÷ number of workers.",
          "Before: 3,600 ÷ 12 = 300 units per worker per week.",
          "After: 4,800 ÷ 12 = 400 units per worker per week.",
          "Productivity has risen by 100 units per worker, which is an increase of (100 ÷ 300) × 100 = 33.3%.",
        ],
        answer: "300 units per worker, rising to 400 — an increase of about 33.3%",
      },
    ],
    practice: [
      {
        question: "Making one item at a time to a customer's specific order is called ______ production.",
        accept: ["job", "job production"],
        answer:
          "Job production. It allows complete customisation and high prices, but the cost per unit is high because nothing is repeated and little can be automated.",
      },
      {
        question: "Making identical items in groups, resetting the equipment between them, is called ______ production.",
        accept: ["batch", "batch production"],
        answer:
          "Batch production. It is the compromise between job and flow: some variety is possible, and unit costs are lower than job production, but resetting between batches wastes time.",
      },
      {
        question: "Making items continuously on a production line is called ______ production.",
        accept: ["flow", "flow production", "mass production", "mass"],
        answer:
          "Flow production. It gives the lowest unit cost through economies of scale, at the price of huge upfront investment and almost no flexibility.",
      },
      {
        question: "A factory with 10 workers makes 2,500 units. Calculate productivity per worker. Give the number only.",
        accept: ["250"],
        answer:
          "250 units per worker. Productivity = output ÷ workers = 2,500 ÷ 10. It is the standard measure of how much each employee produces.",
      },
      {
        question: "A team of 8 produces 3,200 units. Calculate output per worker. Give the number only.",
        accept: ["400"],
        answer:
          "400 units per worker. 3,200 ÷ 8 = 400. Rising productivity means lower labour cost per unit, which is why businesses invest so heavily in it.",
      },
      {
        question: "A stock system where materials arrive exactly when needed is called just in ______.",
        accept: ["time", "just in time", "jit"],
        answer:
          "Just in time (JIT). It frees up the cash and space that stock would occupy, but leaves no cushion if a delivery is late.",
      },
      {
        question: "Continuous improvement through many small changes is called ______.",
        accept: ["kaizen", "continuous improvement"],
        answer:
          "Kaizen. Its strength is that the suggestions come from the people doing the job, who see problems managers never notice — and it motivates them too.",
      },
      {
        question: "Removing anything that uses resources without adding customer value is called ______ production.",
        accept: ["lean", "lean production"],
        answer:
          "Lean production. The test applied to every step is simple: would the customer pay for this? If not, it is waste.",
      },
      {
        question: "Using machinery to do work previously done by people is called ______.",
        accept: ["automation", "automating", "mechanisation"],
        answer:
          "Automation. It raises output and consistency and cuts labour costs, but needs large investment and reduces jobs — a real stakeholder conflict.",
      },
      {
        question: "The maximum output a business can produce with its current resources is called its ______.",
        accept: ["capacity", "maximum capacity"],
        answer:
          "Capacity. Producing well below it wastes fixed costs; producing at 100% leaves no room for a rush order or a breakdown.",
      },
      {
        question: "Which production method would suit a bespoke wedding dress?",
        accept: ["job", "job production"],
        answer:
          "Job production. The product is unique to one customer, who is paying for exactly that — using batch or flow would destroy the very thing being sold.",
      },
      {
        question: "Which production method would suit canned soft drinks?",
        accept: ["flow", "flow production", "mass production", "mass"],
        answer:
          "Flow production. The product is completely standardised and sold in enormous quantities, which is exactly the situation where a production line pays for itself.",
      },
      {
        question: "Give one drawback of just-in-time stock control.",
        accept: ["late delivery", "no buffer", "production stops", "supplier problems", "no spare stock", "risky", "disruption", "delays"],
        answer:
          "There is no buffer stock, so one late delivery or supplier failure stops production entirely. JIT trades safety for efficiency, which is fine until something goes wrong.",
      },
      {
        question: "True or false: raising production always means raising productivity.",
        accept: ["false", "f"],
        answer:
          "False. Hiring twice as many workers doubles production while leaving productivity unchanged — and if they get in each other's way, productivity actually falls.",
      },
      {
        question: "Explain why flow production gives a lower cost per unit than job production. Write two or three sentences.",
        answer:
          "Flow production makes enormous quantities of an identical item, so expensive machinery and fixed costs are spread over far more units, and materials can be bought in bulk at a discount. Workers repeat one specialised task and become very fast at it, and there is no time lost resetting equipment between different products. Job production has none of these advantages because every item is different. Mark this one yourself: credit yourself for spreading fixed costs, bulk buying and specialisation.",
      },
      {
        question: "A furniture maker producing bespoke pieces is considering switching to batch production. Evaluate the decision.",
        answer:
          "Batch production would cut unit costs by repeating designs, buying materials in larger quantities and reducing the time spent setting up for each individual piece, allowing lower prices and higher volume. But bespoke work is almost certainly what customers are paying a premium for — standardised furniture puts the business into direct competition with large manufacturers whose costs it cannot match. It would also need investment in equipment and possibly more space. A middle route is to offer a small range of standard designs in batches alongside the bespoke work, capturing volume without abandoning the premium end. Overall, switching entirely would be a mistake because it trades the business's only real competitive advantage for a market it cannot win. Mark this one yourself: the top band recognises that low cost is not this firm's competitive advantage.",
      },
      {
        question: "JOB production means making:",
        choices: [
          "One unique item at a time to order",
          "Identical items in large batches",
          "Thousands of identical items continuously",
          "Only digital products",
        ],
        accept: [
          "One unique item at a time to order",
        ],
        answer: "It allows customisation and premium prices, but is slow and labour costs per unit are high.",
      },
      {
        question: "FLOW production is best suited to:",
        choices: [
          "Large quantities of identical standardised products",
          "Bespoke wedding cakes",
          "Small batches of seasonal items",
          "One-off engineering projects",
        ],
        accept: [
          "Large quantities of identical standardised products",
        ],
        answer: "It achieves very low unit costs through economies of scale, but setup costs are huge and it is inflexible.",
      },
      {
        question: "What does JUST IN TIME stock control aim to do?",
        choices: [
          "Hold minimal stock, with deliveries arriving as needed",
          "Hold large buffer stocks",
          "Buy stock once a year",
          "Store stock at the supplier's expense permanently",
        ],
        accept: [
          "Hold minimal stock, with deliveries arriving as needed",
        ],
        answer: "It cuts storage costs and waste, but a single late delivery can stop production entirely.",
      },
      {
        question: "Productivity is best defined as:",
        choices: [
          "Output per worker or per hour",
          "Total output only",
          "Total revenue per year",
          "The number of employees",
        ],
        accept: [
          "Output per worker or per hour",
        ],
        answer: "Higher productivity lowers unit costs, which is why training and better equipment can pay for themselves.",
      },
      {
        question: "Which would most likely INCREASE efficiency?",
        choices: [
          "Investing in automated machinery",
          "Increasing waste levels",
          "Reducing staff training",
          "Holding more unsold stock",
        ],
        accept: [
          "Investing in automated machinery",
        ],
        answer: "Automation raises output and consistency, but costs a lot upfront and may reduce the workforce.",
      },
    ],
    misconceptions: [
      {
        wrong: "Productivity means working harder.",
        right:
          "It usually means working with better tools, training or processes. Output per worker rises because the work is done smarter, not faster.",
      },
      {
        wrong: "Flow production is always the cheapest option.",
        right:
          "Only at high volume. The machinery costs an enormous amount, so at low output the fixed costs per unit are far higher than job production's.",
      },
      {
        wrong: "Lean production is just about cutting costs.",
        right:
          "It is about removing anything the customer would not pay for — waiting, defects, excess stock, unnecessary movement. Some of that costs money and some costs time.",
      },
      {
        wrong: "JIT has no downsides because it saves money.",
        right:
          "It removes the cushion entirely. One late lorry stops the line, which is why businesses using JIT need extremely reliable suppliers.",
      },
      {
        wrong: "Automation only affects the business's costs.",
        right:
          "It affects employees whose jobs go and the community around them. That stakeholder impact is part of the answer, not an aside.",
      },
    ],
  },

  "business/stock-and-suppliers": {
    summary:
      "Stock is money sitting on a shelf. Hold too much and cash is trapped in goods nobody has bought yet; hold too little and you turn customers away. This topic is about finding that balance, and about the suppliers who make it possible — because a business is only as reliable as the people who deliver to it.",
    keyFacts: [
      {
        heading: "Why stock control matters",
        points: [
          "Stock includes raw materials, work in progress and finished goods.",
          "Too MUCH stock ties up cash, costs money to store, and risks damage, theft or going out of date.",
          "Too LITTLE stock means lost sales, disappointed customers and idle production.",
          "Perishable and fashionable goods lose value fastest, so they need the tightest control.",
          "Good stock control is really cash flow management wearing a different hat.",
        ],
      },
      {
        heading: "The stock control chart",
        points: [
          "MAXIMUM STOCK LEVEL: the most the business is willing or able to hold.",
          "RE-ORDER LEVEL: the level at which a new order is placed, set so stock arrives before running out.",
          "LEAD TIME: the gap between placing an order and receiving it — longer lead times need higher re-order levels.",
          "BUFFER (minimum) STOCK: a safety cushion held in case of late deliveries or unexpected demand.",
          "The saw-tooth shape of the chart comes from stock falling as it is used and jumping when a delivery arrives.",
        ],
      },
      {
        heading: "Just in time versus just in case",
        points: [
          "JUST IN TIME: stock arrives as it is needed, so almost none is held.",
          "JIT frees cash and space and reduces waste, but depends completely on reliable suppliers.",
          "JUST IN CASE: buffer stock is held deliberately, so a late delivery does not stop the business.",
          "Just in case costs more in storage and tied-up cash, and buys reliability in exchange.",
          "Which is right depends on how predictable demand is and how dependable the suppliers are.",
        ],
      },
      {
        heading: "Choosing and managing suppliers",
        points: [
          "Key factors: price, quality, reliability, speed, flexibility and the credit terms offered.",
          "The cheapest supplier is not the best if deliveries are late or quality varies.",
          "Trade credit from a supplier is effectively an interest-free short-term loan.",
          "Relying on a single supplier is risky; using several costs more but spreads that risk.",
          "Procurement means the whole process of finding, agreeing with and buying from suppliers.",
        ],
      },
    ],
    flashcards: [
      { term: "Stock", definition: "Goods and materials held by a business: raw materials, work in progress and finished goods." },
      { term: "Stock control", definition: "Managing the level of stock so that there is enough to trade without tying up too much cash." },
      { term: "Buffer stock", definition: "A minimum level of stock held as a cushion against late deliveries or unexpected demand." },
      { term: "Re-order level", definition: "The stock level at which a new order is placed." },
      { term: "Lead time", definition: "The time between placing an order with a supplier and receiving it." },
      { term: "Maximum stock level", definition: "The largest amount of stock a business is willing or able to hold." },
      { term: "Just in time (JIT)", definition: "Holding almost no stock, with materials arriving exactly when they are needed." },
      { term: "Just in case", definition: "Deliberately holding buffer stock so that problems with supply do not stop production." },
      { term: "Supplier", definition: "A business that provides goods or materials to another business." },
      { term: "Procurement", definition: "The process of finding, agreeing terms with and buying from suppliers." },
      { term: "Supply chain", definition: "The whole sequence of businesses involved in producing and delivering a product." },
      { term: "Logistics", definition: "The management of storing and moving goods from supplier to customer." },
      { term: "Trade credit", definition: "An agreement to pay a supplier later, typically within 30 to 90 days." },
      { term: "Wastage", definition: "Stock lost through damage, theft, spoilage or going out of date." },
      { term: "Stock rotation", definition: "Using the oldest stock first so that goods do not pass their date while newer stock is sold." },
      { term: "Bulk buying", definition: "Buying large quantities at once to obtain a lower price per unit." },
    ],
    examTips: [
      {
        tip: "Frame stock as CASH",
        detail:
          "Every pound of stock is a pound not in the bank. Making that link turns a description of stock control into an argument about cash flow.",
      },
      {
        tip: "Label a stock control chart fully",
        detail:
          "Maximum level, re-order level, buffer stock and lead time. The labels carry marks; drawing the saw-tooth alone does not.",
      },
      {
        tip: "Lead time drives the re-order level",
        detail:
          "A longer lead time means ordering earlier, so the re-order level must be higher. Examiners test this relationship directly.",
      },
      {
        tip: "Cheapest supplier is not always best",
        detail:
          "Reliability, quality and credit terms all matter. A late delivery that stops production costs far more than the discount saved.",
      },
      {
        tip: "Match the stock system to the product",
        detail:
          "JIT suits predictable demand and reliable suppliers. Fresh food, unpredictable demand or an unreliable supply chain point towards buffer stock.",
      },
      {
        tip: "Mention the risk of a single supplier",
        detail:
          "It gets better prices and a closer relationship, but leaves the business with no alternative if that supplier fails. A good evaluation point.",
      },
    ],
    practice: [
      {
        question: "The minimum level of stock held as a cushion against problems is called ______ stock.",
        accept: ["buffer", "buffer stock", "minimum stock", "safety stock"],
        answer:
          "Buffer stock. It costs money to hold, and that cost buys insurance against a late delivery or a sudden rush of orders.",
      },
      {
        question: "The time between placing an order and receiving it is called the ______ time.",
        accept: ["lead", "lead time"],
        answer:
          "Lead time. The longer it is, the higher the re-order level must be, because stock has to last until the delivery arrives.",
      },
      {
        question: "The stock level at which a new order is placed is called the ______ level.",
        accept: ["re-order", "reorder", "re order", "re-order level"],
        answer:
          "The re-order level. It must be set high enough that remaining stock covers demand throughout the supplier's lead time.",
      },
      {
        question: "Holding almost no stock, with deliveries arriving as needed, is called just in ______.",
        accept: ["time", "just in time", "jit"],
        answer:
          "Just in time. It frees cash and storage space but removes the safety net completely, so it demands very reliable suppliers.",
      },
      {
        question: "Deliberately holding extra stock so problems don't stop production is called just in ______.",
        accept: ["case", "just in case"],
        answer:
          "Just in case. It is the opposite philosophy to JIT: pay to hold stock, and buy certainty with the money.",
      },
      {
        question: "Using the oldest stock first so nothing goes out of date is called stock ______.",
        accept: ["rotation", "stock rotation"],
        answer:
          "Stock rotation. It matters most for food and anything with a date on it, where poor rotation turns stock straight into waste.",
      },
      {
        question: "Stock lost through damage, theft or going out of date is called ______.",
        accept: ["wastage", "waste", "shrinkage"],
        answer:
          "Wastage. It is a direct loss — the business paid for those goods and will never sell them, so it comes straight off profit.",
      },
      {
        question: "The process of finding and buying from suppliers is called ______.",
        accept: ["procurement", "purchasing"],
        answer:
          "Procurement. Done well it affects cost, quality and reliability at once, which is why large businesses employ specialists to do nothing else.",
      },
      {
        question: "Buying large quantities to get a lower price per unit is called ______ buying.",
        accept: ["bulk", "bulk buying"],
        answer:
          "Bulk buying. It lowers unit cost but ties up cash in stock, so the discount has to be weighed against the cash flow cost.",
      },
      {
        question: "The management of storing and moving goods is called ______.",
        accept: ["logistics", "distribution"],
        answer:
          "Logistics. It has become far more important as supply chains have stretched around the world, because distance adds both cost and risk.",
      },
      {
        question: "If a supplier's lead time increases, should the re-order level rise or fall?",
        accept: ["rise", "rises", "increase", "increases", "go up", "higher", "it rises"],
        answer:
          "Rise. The business must order earlier — at a higher stock level — so that what remains lasts until the slower delivery arrives.",
      },
      {
        question: "Give one cost of holding too much stock.",
        accept: ["storage", "cash tied up", "damage", "theft", "out of date", "obsolete", "space", "insurance", "spoilage", "ties up cash"],
        answer:
          "Cash tied up in unsold goods, storage and insurance costs, and the risk of damage, theft, spoilage or going out of date.",
      },
      {
        question: "Give one cost of holding too little stock.",
        accept: ["lost sales", "customers go elsewhere", "cant meet demand", "production stops", "stockouts", "disappointed customers", "lost customers", "delays"],
        answer:
          "Lost sales when demand cannot be met, and customers who go to a competitor and may not come back. Production can also stop entirely if materials run out.",
      },
      {
        question: "True or false: the cheapest supplier is always the best choice.",
        accept: ["false", "f"],
        answer:
          "False. Reliability, quality, speed and credit terms all matter. A supplier who is 5% cheaper but frequently late can cost far more than the saving through lost production and sales.",
      },
      {
        question: "Explain why holding a lot of stock can cause cash flow problems. Write two or three sentences.",
        answer:
          "Stock has already been paid for but has not yet been sold, so the money is sitting on a shelf rather than in the bank where it could pay wages and suppliers. The more stock held, the more cash is trapped, and storage and insurance add further costs on top. If the stock then goes out of date or out of fashion, that cash is lost entirely. Mark this one yourself: credit yourself for the point that stock is cash that has already been spent.",
      },
      {
        question: "A bakery is considering moving to just-in-time deliveries of flour. Evaluate the decision.",
        answer:
          "JIT would free up cash and storage space and reduce the risk of flour going stale or attracting pests, which matters for a food business with limited premises. But bread must be baked every morning, so a single late delivery means nothing to sell that day — lost revenue and customers who go elsewhere and may not return. Flour is also cheap to store relative to its value and does not spoil quickly, so the cash freed up is modest compared with the risk. A partial approach — reducing stock but keeping two or three days of buffer — captures most of the benefit with far less exposure. Overall full JIT is a poor fit here because the downside of a stockout is severe and the saving is small. Mark this one yourself: the top band weighs the SIZE of the saving against the SIZE of the risk, rather than listing both.",
      },
    ],
    misconceptions: [
      {
        wrong: "More stock means a better-prepared business.",
        right:
          "Stock is cash that has already been spent. Too much of it starves the business of the money it needs to pay wages and suppliers.",
      },
      {
        wrong: "JIT is always better because it saves money.",
        right:
          "It removes the safety cushion. For a business with unreliable suppliers or unpredictable demand, buffer stock is worth what it costs.",
      },
      {
        wrong: "Buffer stock is stock that has been forgotten about.",
        right:
          "It is deliberately held to cover late deliveries and demand spikes. It is a planned cost, not an accident.",
      },
      {
        wrong: "You should always choose the supplier with the lowest price.",
        right:
          "Reliability, quality and credit terms matter too. A cheap supplier who delivers late can stop production entirely, which costs far more than the discount.",
      },
    ],
  },

  "business/quality": {
    summary:
      "Quality is not the same as expensive. It means the product does what the customer was led to expect, consistently. This topic covers how businesses check quality, the difference between catching mistakes and preventing them, and why the cheapest possible product is often the most expensive once returns, complaints and lost reputation are counted.",
    keyFacts: [
      {
        heading: "What quality means",
        points: [
          "Quality means meeting customer expectations consistently — a budget product can be high quality if it does what it promises.",
          "It applies to services as much as goods: speed, accuracy and courtesy are quality measures too.",
          "Consistency matters as much as standard: customers expect the same experience every visit.",
          "Poor quality costs money directly through refunds, replacements, repairs and wasted materials.",
          "It costs far more indirectly through lost customers and damaged reputation.",
        ],
      },
      {
        heading: "Quality control and quality assurance",
        points: [
          "QUALITY CONTROL: inspecting products at the END of production and rejecting the faulty ones.",
          "Quality control catches defects but does not prevent them, so the wasted materials and time are already spent.",
          "QUALITY ASSURANCE: building quality into every stage, with each worker responsible for their own output.",
          "Quality assurance prevents defects rather than finding them, which is cheaper — but needs training and trust.",
          "TOTAL QUALITY MANAGEMENT (TQM) makes quality the responsibility of everyone in the organisation.",
        ],
      },
      {
        heading: "The benefits of high quality",
        points: [
          "Fewer returns, repairs and complaints, so lower costs.",
          "A reputation that lets the business charge a higher price.",
          "Repeat custom and recommendations, which are far cheaper than winning new customers.",
          "Less waste, because fewer items are scrapped.",
          "A stronger brand and a genuine competitive advantage that rivals cannot copy quickly.",
        ],
      },
      {
        heading: "The costs and trade-offs",
        points: [
          "Better materials, training, inspection and systems all cost money.",
          "Higher quality can mean slower production and lower output.",
          "Quality standards such as ISO certification cost money and time to obtain.",
          "There is a level of quality appropriate to the market: a budget brand does not need luxury materials.",
          "Over-engineering — building in quality customers will not pay for — is itself a form of waste.",
        ],
      },
    ],
    flashcards: [
      { term: "Quality", definition: "Meeting customer expectations consistently, whatever the price level of the product." },
      { term: "Quality control", definition: "Inspecting finished products and removing those that fail to meet the standard." },
      { term: "Quality assurance", definition: "Building quality checks into every stage of production so faults are prevented rather than found." },
      { term: "Total quality management (TQM)", definition: "An approach making quality the responsibility of every employee in the organisation." },
      { term: "Quality standard", definition: "An agreed level of quality a product or process must meet, often certified by an outside body." },
      { term: "Defect", definition: "A fault in a product that means it does not meet the required standard." },
      { term: "Reject rate", definition: "The proportion of output that fails quality checks and cannot be sold." },
      { term: "Returns", definition: "Products sent back by customers because they are faulty or unsatisfactory." },
      { term: "Reputation", definition: "How a business is regarded by customers, which affects whether they buy and recommend." },
      { term: "Repeat custom", definition: "Customers who buy again, which costs far less to obtain than new customers." },
      { term: "Over-engineering", definition: "Building in quality beyond what customers want or will pay for — a form of waste." },
      { term: "Continuous improvement", definition: "Making many small ongoing improvements to quality and process, also called kaizen." },
      { term: "Customer expectation", definition: "What a customer believes they will receive, set by price, description and reputation." },
      { term: "Warranty", definition: "A promise by the business to repair or replace a product within a set period." },
      { term: "Recall", definition: "Asking customers to return a product because a fault has been discovered after sale." },
      { term: "Brand image", definition: "The overall impression customers hold of a brand, strongly influenced by quality." },
    ],
    examTips: [
      {
        tip: "Quality means meeting expectations, not being expensive",
        detail:
          "A £3 pen that writes reliably is high quality. Defining quality as 'expensive' or 'luxurious' is the commonest error in this topic.",
      },
      {
        tip: "Control catches, assurance prevents",
        detail:
          "Quality control inspects at the end; quality assurance builds it in throughout. That one sentence answers most questions here.",
      },
      {
        tip: "Cost the poor quality, not just the good",
        detail:
          "Refunds, replacements, wasted materials and lost customers all have a price. Quantifying that makes the investment case far stronger.",
      },
      {
        tip: "Match quality to the target market",
        detail:
          "A budget brand does not need premium materials. Over-engineering is waste, and saying so shows real understanding.",
      },
      {
        tip: "Apply it to services too",
        detail:
          "For a café or a salon, quality means speed, consistency and how customers are treated. Answers that only discuss manufacturing miss half the marks.",
      },
      {
        tip: "Use reputation as the long-term argument",
        detail:
          "The direct costs of poor quality are recoverable; a damaged reputation is not, and it takes far longer to rebuild than to lose.",
      },
    ],
    practice: [
      {
        question: "Inspecting finished products and removing faulty ones is called quality ______.",
        accept: ["control", "quality control"],
        answer:
          "Quality control. It catches defects before they reach customers, but the materials and time that went into the faulty item are already wasted.",
      },
      {
        question: "Building quality checks into every stage of production is called quality ______.",
        accept: ["assurance", "quality assurance"],
        answer:
          "Quality assurance. It prevents faults rather than finding them, which is cheaper overall — but it requires training and trusting staff to check their own work.",
      },
      {
        question: "An approach making quality the responsibility of every employee is called total quality ______.",
        accept: ["management", "total quality management", "tqm"],
        answer:
          "Total quality management (TQM). Its logic is that the person doing the job spots problems first, so quality should not be somebody else's department.",
      },
      {
        question: "A fault in a product that means it fails the required standard is called a ______.",
        accept: ["defect", "a defect", "fault"],
        answer:
          "A defect. Every defect represents materials and labour already spent on something that cannot be sold, which is why prevention beats detection.",
      },
      {
        question: "The proportion of output that fails quality checks is called the ______ rate.",
        accept: ["reject", "reject rate", "rejection"],
        answer:
          "The reject rate. Tracking it over time shows whether quality is improving, and a rising rate is an early warning of a process problem.",
      },
      {
        question: "Building in quality beyond what customers will pay for is called ______.",
        accept: ["over-engineering", "overengineering", "over engineering"],
        answer:
          "Over-engineering. It is a form of waste under lean thinking: the customer would not pay for it, so the extra cost buys nothing.",
      },
      {
        question: "Asking customers to return a product because a fault was found after sale is called a ______.",
        accept: ["recall", "a recall", "product recall"],
        answer:
          "A recall. It is expensive and highly public, which is why the reputational damage usually exceeds the direct cost of replacing the goods.",
      },
      {
        question: "A promise to repair or replace a product within a set period is called a ______.",
        accept: ["warranty", "a warranty", "guarantee"],
        answer:
          "A warranty. Offering a long one signals confidence in quality, which is why it works as a marketing tool as well as a legal commitment.",
      },
      {
        question: "True or false: a cheap product cannot be high quality.",
        accept: ["false", "f"],
        answer:
          "False. Quality means meeting expectations consistently. A £3 pen that always writes is high quality; a £300 pen that leaks is not.",
      },
      {
        question: "Customers who buy again are called ______ custom.",
        accept: ["repeat", "repeat custom", "returning"],
        answer:
          "Repeat custom. It is far cheaper than winning new customers, which is the clearest financial argument for investing in quality.",
      },
      {
        question: "Give one direct cost to a business of poor quality.",
        accept: ["refunds", "replacements", "repairs", "waste", "returns", "wasted materials", "compensation", "recalls", "scrap"],
        answer:
          "Refunds, replacements, repairs, wasted materials and recalls. These are measurable — the harder cost to quantify is the customers who quietly never return.",
      },
      {
        question: "Which approach PREVENTS faults rather than finding them at the end?",
        accept: ["quality assurance", "assurance", "tqm", "total quality management"],
        answer:
          "Quality assurance (and TQM). Prevention is cheaper because nothing is wasted producing an item that will be rejected later.",
      },
      {
        question: "Making many small ongoing improvements is called continuous ______.",
        accept: ["improvement", "continuous improvement", "kaizen"],
        answer:
          "Continuous improvement, or kaizen. It works because the people doing the job every day see problems that never reach a manager's desk.",
      },
      {
        question: "For a café, name one thing that counts as quality other than the food itself.",
        accept: ["service", "speed", "cleanliness", "consistency", "atmosphere", "staff", "customer service", "friendliness", "waiting time"],
        answer:
          "Speed of service, cleanliness, consistency and how staff treat customers. Quality in a service business is mostly about the experience, not the product.",
      },
      {
        question: "Explain why investing in quality assurance may be cheaper than quality control. Write two or three sentences.",
        answer:
          "Quality control finds faults at the end, by which point the materials, machine time and labour have already been spent on something that must be scrapped or reworked. Quality assurance builds checks into each stage, so a problem is caught when only part of the value has been added — or prevented altogether. The saving comes from not producing waste in the first place, though it does require training staff and trusting them to check their own work. Mark this one yourself: credit yourself for the point that faults found at the end have already consumed the full cost.",
      },
      {
        question: "A budget clothing brand is considering using much better fabric. Evaluate the decision.",
        answer:
          "Better fabric would reduce returns and complaints, improve reputation and might allow a modest price rise. But the business competes on price, and its customers chose it precisely because it is cheap — most will not pay more, and raising prices risks losing them to rivals. Better fabric than the market expects is over-engineering: paying for quality the customer will not fund. A more targeted approach would be to fix the specific faults that generate returns, such as seams splitting, without upgrading everything. Overall, a wholesale upgrade is probably wrong for this brand, but eliminating the defects that cause complaints is worth doing because those cost money directly. Mark this one yourself: the top band needs quality matched to the TARGET MARKET, plus a more targeted alternative.",
      },
      {
        question: "Quality CONTROL involves:",
        choices: [
          "Checking finished products for faults at the end",
          "Every worker checking their own work throughout",
          "Never checking products",
          "Asking customers to test products",
        ],
        accept: [
          "Checking finished products for faults at the end",
        ],
        answer: "Quality assurance builds checks in throughout, which catches faults earlier and wastes less material.",
      },
      {
        question: "Total Quality Management means:",
        choices: [
          "Every employee takes responsibility for quality",
          "Only managers check quality",
          "Quality is checked once a year",
          "Faulty goods are sold at a discount",
        ],
        accept: [
          "Every employee takes responsibility for quality",
        ],
        answer: "It aims for zero defects, but needs a culture change and heavy training investment to work.",
      },
      {
        question: "Poor quality is costly mainly because of:",
        choices: [
          "Wasted materials, reworking and damaged reputation",
          "Higher staff wages",
          "Lower advertising costs",
          "Increased stock levels",
        ],
        accept: [
          "Wasted materials, reworking and damaged reputation",
        ],
        answer: "Reputational damage lasts longest — a product recall can affect sales for years after the fault is fixed.",
      },
      {
        question: "A quality STANDARD such as a recognised certification helps a business by:",
        choices: [
          "Reassuring customers that consistent processes are followed",
          "Guaranteeing higher profits",
          "Removing the need for inspection",
          "Reducing all costs immediately",
        ],
        accept: [
          "Reassuring customers that consistent processes are followed",
        ],
        answer: "Some large buyers will only deal with certified suppliers, so it can be a condition of winning contracts.",
      },
      {
        question: "Continuous improvement means:",
        choices: [
          "Making many small ongoing improvements over time",
          "One large change every few years",
          "Improving only when a fault occurs",
          "Copying competitors exactly",
        ],
        accept: [
          "Making many small ongoing improvements over time",
        ],
        answer: "Small changes are cheaper and less disruptive than occasional major overhauls, and involve staff directly.",
      },
    ],
    misconceptions: [
      {
        wrong: "Quality means expensive or luxurious.",
        right:
          "It means meeting customer expectations consistently. A budget product that reliably does its job is high quality; an expensive one that fails is not.",
      },
      {
        wrong: "Quality control and quality assurance are the same thing.",
        right:
          "Control inspects at the end and rejects failures. Assurance builds checks into every stage so failures do not happen. One detects, the other prevents.",
      },
      {
        wrong: "Higher quality is always worth the extra cost.",
        right:
          "Only if customers will pay for it. Building in quality the target market does not want is over-engineering, which lean thinking treats as waste.",
      },
      {
        wrong: "Quality only matters in manufacturing.",
        right:
          "For a service business it is speed, consistency, accuracy and how customers are treated — often more visible to the customer than a product's build.",
      },
    ],
  },

  "business/customer-service": {
    summary:
      "Winning a new customer costs several times more than keeping an existing one, which is the entire commercial case for customer service. This topic covers what good service actually consists of, how businesses handle it when things go wrong, and why the response to a complaint often matters more to a customer than the problem that caused it.",
    keyFacts: [
      {
        heading: "What good customer service involves",
        points: [
          "Product knowledge: staff who can actually answer the question being asked.",
          "Speed and availability: short waits, easy contact, quick replies.",
          "Politeness and attitude, which customers remember longer than almost anything else.",
          "After-sales service: delivery, installation, warranties, spare parts and support.",
          "Consistency — the same standard every visit, from every member of staff.",
        ],
      },
      {
        heading: "Why it matters commercially",
        points: [
          "Keeping a customer is far cheaper than acquiring a new one, so service protects profit directly.",
          "Satisfied customers recommend the business, which is advertising that costs nothing.",
          "Good service allows a higher price, because customers pay for the experience as well as the product.",
          "Dissatisfied customers tell far more people than satisfied ones, and now do it publicly online.",
          "It is a genuine competitive advantage for small businesses, who cannot win on price but can on attention.",
        ],
      },
      {
        heading: "Handling complaints",
        points: [
          "A complaint is information: it identifies a problem the business could otherwise miss.",
          "Most customers who complain and are dealt with well remain customers — often more loyally than before.",
          "Good practice: listen, apologise, resolve quickly, and follow up.",
          "Staff need the authority to fix small problems without escalating everything to a manager.",
          "Reviews and social media mean complaints are now public, so the response is visible to future customers too.",
        ],
      },
      {
        heading: "Costs and trade-offs",
        points: [
          "Good service costs money: more staff, better training, longer opening hours, free returns.",
          "Self-service and chatbots cut costs but frustrate customers with unusual problems.",
          "Businesses must decide the level of service their market expects and will pay for.",
          "A budget airline and a luxury hotel are both right to offer different levels of service.",
          "Under-investing is a false economy when the lost customers are counted.",
        ],
      },
    ],
    flashcards: [
      { term: "Customer service", definition: "The support and experience a business provides before, during and after a sale." },
      { term: "After-sales service", definition: "Support provided once a purchase is complete, such as delivery, installation, warranties and repairs." },
      { term: "Customer satisfaction", definition: "How well the product and service meet what the customer expected." },
      { term: "Customer loyalty", definition: "A customer's willingness to keep buying from the same business rather than switching." },
      { term: "Customer retention", definition: "Keeping existing customers so that they buy again." },
      { term: "Word of mouth", definition: "Customers recommending a business to others — free and highly trusted advertising." },
      { term: "Complaint", definition: "A customer telling a business that something has gone wrong, which is useful information as well as a problem." },
      { term: "Refund", definition: "Returning a customer's money when a product or service was unsatisfactory." },
      { term: "Loyalty scheme", definition: "A programme rewarding repeat purchases, which also collects data on what customers buy." },
      { term: "Product knowledge", definition: "How well staff understand what they are selling, so they can advise customers accurately." },
      { term: "Online review", definition: "A public rating or comment about a business, visible to potential customers." },
      { term: "Self-service", definition: "Letting customers serve themselves to cut staffing costs, such as checkouts or online help." },
      { term: "Personalisation", definition: "Tailoring the service or offers to an individual customer's history and preferences." },
      { term: "Service level", definition: "The standard of service a business chooses to offer, matched to what its market expects." },
      { term: "Customer experience", definition: "The whole impression a customer forms from every interaction with a business." },
      { term: "Feedback", definition: "Information from customers about their experience, used to improve the business." },
    ],
    examTips: [
      {
        tip: "Use the cost of losing a customer",
        detail:
          "Acquiring a new customer costs several times more than keeping one. That single fact turns customer service from a nicety into a financial argument.",
      },
      {
        tip: "Treat complaints as information",
        detail:
          "The strongest answers point out that a complaint is free market research, and that a well-handled complaint often produces a more loyal customer.",
      },
      {
        tip: "Match the service level to the market",
        detail:
          "A budget airline is right not to offer the service of a luxury hotel. Recommending premium service for a discount business shows you have missed the strategy.",
      },
      {
        tip: "Mention online reviews specifically",
        detail:
          "Complaints are now public and permanent. That changes the arithmetic completely and is a strong, current evaluation point.",
      },
      {
        tip: "Link service to a small firm's advantage",
        detail:
          "A small business cannot beat a chain on price, but it can know its customers by name. Service is one of the few areas where being small helps.",
      },
      {
        tip: "Cost the improvement as well as praising it",
        detail:
          "More staff, longer hours and free returns all cost money. Balanced answers weigh the retained custom against the extra cost.",
      },
    ],
    practice: [
      {
        question: "Support provided after a purchase, such as repairs and warranties, is called ______ service.",
        accept: ["after-sales", "aftersales", "after sales", "after-sales service"],
        answer:
          "After-sales service. It matters most for expensive or technical products, where the customer's risk continues long after the sale is made.",
      },
      {
        question: "Keeping existing customers so they buy again is called customer ______.",
        accept: ["retention", "customer retention", "loyalty"],
        answer:
          "Customer retention. It is the cheapest source of sales a business has, because there is no advertising cost attached to a customer who already trusts you.",
      },
      {
        question: "Customers recommending a business to others is called word of ______.",
        accept: ["mouth", "word of mouth"],
        answer:
          "Word of mouth. It costs nothing and is trusted far more than advertising, because it comes from someone with no reason to exaggerate.",
      },
      {
        question: "A programme rewarding repeat purchases is called a ______ scheme.",
        accept: ["loyalty", "loyalty scheme", "rewards"],
        answer:
          "A loyalty scheme. It encourages repeat custom and collects detailed data on what individual customers actually buy — useful market research as a by-product.",
      },
      {
        question: "How well staff understand what they are selling is called product ______.",
        accept: ["knowledge", "product knowledge"],
        answer:
          "Product knowledge. It is what turns a shop assistant into a reason to buy in person rather than online, so it directly affects sales.",
      },
      {
        question: "True or false: a customer who complains is usually lost for good.",
        accept: ["false", "f"],
        answer:
          "False. Most customers who complain and are dealt with well stay — often more loyally than before, because they have seen the business put something right.",
      },
      {
        question: "Letting customers serve themselves to reduce staffing costs is called ______.",
        accept: ["self-service", "selfservice", "self service"],
        answer:
          "Self-service. It cuts costs and suits simple transactions, but frustrates customers with unusual problems who need an actual person.",
      },
      {
        question: "Tailoring offers to an individual customer's history is called ______.",
        accept: ["personalisation", "personalization", "personalising"],
        answer:
          "Personalisation. Data makes it possible at scale, though customers dislike it if it feels intrusive — so there is a line to judge.",
      },
      {
        question: "Information from customers about their experience is called ______.",
        accept: ["feedback", "customer feedback"],
        answer:
          "Feedback. It is free market research, and businesses that treat complaints as feedback rather than nuisances improve faster than those that do not.",
      },
      {
        question: "Which is generally cheaper: keeping an existing customer, or winning a new one?",
        accept: ["keeping an existing customer", "keeping", "existing", "retention", "keeping existing", "existing customer"],
        answer:
          "Keeping an existing customer — typically several times cheaper, because no advertising is needed and trust already exists. This is the core financial case for good service.",
      },
      {
        question: "A public rating or comment about a business visible to others is called an online ______.",
        accept: ["review", "online review", "reviews"],
        answer:
          "An online review. It has changed customer service permanently: complaints are now public, permanent, and read by people deciding whether to buy.",
      },
      {
        question: "Give one cost to a business of improving customer service.",
        accept: ["training", "more staff", "longer hours", "wages", "free returns", "staff costs", "cost", "time", "equipment"],
        answer:
          "Training, hiring more staff, longer opening hours and free returns all cost money. The question is always whether the retained custom is worth more than the spend.",
      },
      {
        question: "The whole impression a customer forms from every interaction is called the customer ______.",
        accept: ["experience", "customer experience"],
        answer:
          "The customer experience. It includes the website, the queue, the packaging and the refund process — not just the moment of sale.",
      },
      {
        question: "True or false: a budget airline should offer the same level of service as a luxury hotel.",
        accept: ["false", "f"],
        answer:
          "False. Service level should match what the market expects and will pay for. Budget customers chose low prices, and paying for premium service would raise the fares they came for.",
      },
      {
        question: "Explain why a small independent shop might compete on customer service rather than price. Write two or three sentences.",
        answer:
          "A small shop cannot match a supermarket's buying power, so competing on price means losing slowly. Service is something it can genuinely do better — knowing customers by name, giving real advice, remembering preferences — and a chain with standardised procedures cannot easily copy it. That builds loyalty and word-of-mouth recommendations, which are far cheaper than advertising. Mark this one yourself: credit yourself for why price competition fails AND for why service is defensible against a larger rival.",
      },
      {
        question: "A restaurant receives a damaging online review. Evaluate how it should respond.",
        answer:
          "Responding publicly, politely and quickly is usually best: future customers read the response as well as the complaint, and a calm, specific reply that offers to put things right often does more good than the review did harm. Arguing publicly is the clearest mistake, since it makes the business look worse than the original complaint did. The restaurant should also treat the review as information — if the same issue appears repeatedly it is a real problem, not an unreasonable customer. Ignoring it is defensible only for an obviously malicious review, and even then a brief factual reply is usually safer. Overall it should reply publicly, resolve privately, and check whether the complaint reflects a pattern. Mark this one yourself: the top band needs the point that the RESPONSE is public and judged by future customers.",
      },
      {
        question: "Good customer service is important mainly because:",
        choices: [
          "It encourages repeat purchases and word-of-mouth recommendation",
          "It reduces the cost of raw materials",
          "It removes the need for marketing",
          "It lowers wages",
        ],
        accept: [
          "It encourages repeat purchases and word-of-mouth recommendation",
        ],
        answer: "Keeping an existing customer costs far less than winning a new one, which is why retention matters financially.",
      },
      {
        question: "Post-sales service includes:",
        choices: [
          "Warranties, returns and technical support",
          "Advertising before launch",
          "Choosing suppliers",
          "Setting the original price",
        ],
        accept: [
          "Warranties, returns and technical support",
        ],
        answer: "It reassures buyers at the point of purchase, and is often what turns a one-off buyer into a repeat one.",
      },
      {
        question: "Product knowledge helps staff because it allows them to:",
        choices: [
          "Answer questions accurately and recommend suitable products",
          "Work longer hours",
          "Set their own wages",
          "Avoid dealing with customers",
        ],
        accept: [
          "Answer questions accurately and recommend suitable products",
        ],
        answer: "It builds trust and reduces returns caused by customers buying the wrong thing.",
      },
      {
        question: "A business responding well to a complaint is likely to:",
        choices: [
          "Retain the customer and limit reputational damage",
          "Lose more customers",
          "Increase its costs permanently",
          "Have to close",
        ],
        accept: [
          "Retain the customer and limit reputational damage",
        ],
        answer: "Complaints handled well often produce more loyal customers than those who never had a problem.",
      },
      {
        question: "Which is a risk of POOR customer service in the age of social media?",
        choices: [
          "Negative reviews spread quickly to a wide audience",
          "Suppliers refuse to deliver",
          "Tax rates increase",
          "Staff must be paid more",
        ],
        accept: [
          "Negative reviews spread quickly to a wide audience",
        ],
        answer: "One bad experience can now reach thousands of potential customers within hours, which raises the stakes considerably.",
      },
    ],
    misconceptions: [
      {
        wrong: "Good customer service means always saying yes.",
        right:
          "It means handling the interaction honestly, quickly and respectfully. Refusing an unreasonable request politely and clearly is still good service.",
      },
      {
        wrong: "Complaints are purely a problem.",
        right:
          "A complaint is free information about something that is going wrong, and a customer giving you the chance to fix it rather than silently leaving.",
      },
      {
        wrong: "Every business should offer the highest possible service level.",
        right:
          "Service should match what the market expects and will pay for. Premium service on a budget product raises prices customers came to avoid.",
      },
      {
        wrong: "Customer service only matters at the moment of sale.",
        right:
          "After-sales service — delivery, returns, warranties, support — often shapes whether someone buys again far more than the sale itself did.",
      },
    ],
  },

  "business/organisational-structures": {
    summary:
      "Once a business is bigger than a few people, somebody has to decide who reports to whom and who is allowed to decide what. This topic covers the shapes organisations take, the vocabulary that describes them, and the real trade-off underneath: control at the top versus speed and motivation further down.",
    keyFacts: [
      {
        heading: "The vocabulary",
        points: [
          "An ORGANISATIONAL CHART shows who reports to whom, drawn as a hierarchy.",
          "The CHAIN OF COMMAND is the line of authority from the top of the business to the bottom.",
          "The SPAN OF CONTROL is the number of people a manager directly supervises.",
          "A LEVEL OF HIERARCHY is one layer of the chart — one rank of the organisation.",
          "DELEGATION is passing authority for a task down to somebody else, while remaining responsible for the outcome.",
        ],
      },
      {
        heading: "Tall and flat structures",
        points: [
          "A TALL structure has many levels and narrow spans of control.",
          "Tall: close supervision, clear promotion routes — but slow communication and higher management costs.",
          "A FLAT structure has few levels and wide spans of control.",
          "Flat: faster decisions, cheaper, staff feel more trusted — but managers are stretched and promotion routes are limited.",
          "DELAYERING means removing a level of management, usually to cut costs and speed things up.",
        ],
      },
      {
        heading: "Centralised and decentralised",
        points: [
          "CENTRALISED: decisions are made at the top by senior managers.",
          "Centralised gives consistency and tight control, but slower responses and less motivated junior staff.",
          "DECENTRALISED: decision-making is pushed down to local managers or teams.",
          "Decentralised responds faster to local conditions and motivates staff, but risks inconsistency.",
          "Most real businesses do both — pricing centralised, staffing decisions local, for instance.",
        ],
      },
      {
        heading: "How structures are organised",
        points: [
          "By FUNCTION: departments for marketing, finance, operations and human resources.",
          "By PRODUCT: a division for each product range, each with its own functions.",
          "By REGION: a division for each geographical area, suited to businesses operating in several countries.",
          "The right structure depends on size, on how varied the products are, and on how spread out the business is.",
          "Structures need to change as a business grows — what works for ten people fails at two hundred.",
        ],
      },
    ],
    flashcards: [
      { term: "Organisational structure", definition: "The way a business arranges its people, showing who reports to whom and who decides what." },
      { term: "Organisational chart", definition: "A diagram showing the structure of a business and the reporting lines within it." },
      { term: "Chain of command", definition: "The line of authority running from the top of an organisation down to the bottom." },
      { term: "Span of control", definition: "The number of employees a manager is directly responsible for." },
      { term: "Level of hierarchy", definition: "One layer of an organisational structure — a single rank within the business." },
      { term: "Tall structure", definition: "A structure with many levels of hierarchy and narrow spans of control." },
      { term: "Flat structure", definition: "A structure with few levels of hierarchy and wide spans of control." },
      { term: "Delayering", definition: "Removing a level of management from the hierarchy, usually to cut costs and speed decisions." },
      { term: "Delegation", definition: "Passing authority for a task to a subordinate, while keeping overall responsibility for it." },
      { term: "Authority", definition: "The right to make decisions and give instructions." },
      { term: "Responsibility", definition: "Being accountable for the outcome of a task, whether or not you carried it out yourself." },
      { term: "Centralised structure", definition: "One where most decisions are made by senior managers at the top." },
      { term: "Decentralised structure", definition: "One where decision-making is passed down to local managers or teams." },
      { term: "Line manager", definition: "The person an employee reports to directly." },
      { term: "Subordinate", definition: "An employee who reports to a particular manager." },
      { term: "Functional structure", definition: "An organisation divided into departments by activity, such as marketing, finance and operations." },
    ],
    examTips: [
      {
        tip: "Span of control and levels of hierarchy move opposite ways",
        detail:
          "Wide spans mean fewer levels (flat); narrow spans mean more levels (tall). Getting this relationship the right way round is most of the topic.",
      },
      {
        tip: "Read an organisational chart carefully before answering",
        detail:
          "Count the levels and count how many people report to the named manager. Both are quick marks that are lost by rushing.",
      },
      {
        tip: "Delegation is authority passed down, responsibility kept",
        detail:
          "The manager remains accountable. That distinction is examined directly and is easy to state precisely.",
      },
      {
        tip: "Give both sides of delayering",
        detail:
          "It cuts costs and speeds decisions, but overloads remaining managers, removes promotion routes and damages morale through job losses.",
      },
      {
        tip: "Centralisation is a spectrum, not a switch",
        detail:
          "Most businesses centralise some decisions and decentralise others. Saying which decisions should sit where is a top-band answer.",
      },
      {
        tip: "Link structure to the business's situation",
        detail:
          "A chain with identical branches suits centralisation; a business serving very different local markets does not. Use the case study.",
      },
    ],
    practice: [
      {
        question: "The number of employees a manager directly supervises is called the span of ______.",
        accept: ["control", "span of control"],
        answer:
          "The span of control. A wide span means fewer managers and lower costs, but less supervision available for each person.",
      },
      {
        question: "The line of authority from the top of a business to the bottom is called the chain of ______.",
        accept: ["command", "chain of command"],
        answer:
          "The chain of command. A long chain means instructions and information pass through many hands, which makes them slower and more likely to be distorted.",
      },
      {
        question: "A structure with many levels and narrow spans of control is called a ______ structure.",
        accept: ["tall", "tall structure", "hierarchical"],
        answer:
          "A tall structure. It gives close supervision and clear promotion routes, at the cost of slower communication and more managers to pay.",
      },
      {
        question: "A structure with few levels and wide spans of control is called a ______ structure.",
        accept: ["flat", "flat structure"],
        answer:
          "A flat structure. Decisions are faster and management costs lower, but each manager supervises more people and there are fewer promotions to offer.",
      },
      {
        question: "Removing a level of management from the hierarchy is called ______.",
        accept: ["delayering", "de-layering", "delayer"],
        answer:
          "Delayering. It cuts costs and shortens the chain of command, but overloads the managers who remain and removes rungs from the promotion ladder.",
      },
      {
        question: "Passing authority for a task to a subordinate is called ______.",
        accept: ["delegation", "delegating", "delegate"],
        answer:
          "Delegation. Note that authority is passed down but RESPONSIBILITY stays with the manager — that distinction is examined directly.",
      },
      {
        question: "When most decisions are made by senior managers at the top, the structure is ______.",
        accept: ["centralised", "centralized", "central"],
        answer:
          "Centralised. It gives consistency across the business and tight control, but responds slowly and can leave junior staff feeling powerless.",
      },
      {
        question: "When decision-making is passed down to local managers, the structure is ______.",
        accept: ["decentralised", "decentralized", "decentral"],
        answer:
          "Decentralised. Local managers respond faster to what is actually happening in front of them, at the cost of consistency across the business.",
      },
      {
        question: "One layer of an organisational chart is called a level of ______.",
        accept: ["hierarchy", "level of hierarchy", "management"],
        answer:
          "A level of hierarchy. Counting these levels is how you tell whether a structure is tall or flat, and it is a common one-mark question.",
      },
      {
        question: "The person an employee reports to directly is called their ______ manager.",
        accept: ["line", "line manager"],
        answer:
          "Their line manager. Clear reporting lines matter because an employee with two bosses giving conflicting instructions cannot satisfy both.",
      },
      {
        question: "The right to make decisions and give instructions is called ______.",
        accept: ["authority"],
        answer:
          "Authority. It can be delegated downwards, unlike responsibility, which stays with the manager who delegated it.",
      },
      {
        question: "If a business widens its spans of control, will it have more or fewer levels of hierarchy?",
        accept: ["fewer", "less", "fewer levels", "reduce", "decrease"],
        answer:
          "Fewer. Each manager supervises more people, so fewer managers are needed and the structure becomes flatter — the two measures always move in opposite directions.",
      },
      {
        question: "An organisation divided into marketing, finance and operations departments has which type of structure?",
        accept: ["functional", "functional structure", "by function", "function"],
        answer:
          "A functional structure. It groups specialists together, which builds expertise, but can make departments focus on their own goals rather than the business's.",
      },
      {
        question: "Give one drawback of a tall organisational structure.",
        accept: ["slow communication", "slow decisions", "expensive", "more managers", "cost", "distorted messages", "slow", "bureaucracy"],
        answer:
          "Communication is slow and gets distorted passing through many levels, decisions take longer, and paying several layers of management is expensive.",
      },
      {
        question: "Explain why delegation can motivate employees. Write two or three sentences.",
        answer:
          "Being given authority over a task shows the employee is trusted, which meets the need for esteem and recognition rather than just pay. It also makes the work more varied and interesting than simply following instructions, and develops skills that make promotion possible. The manager benefits too, freeing time for work only they can do — though they remain responsible if it goes wrong. Mark this one yourself: credit yourself for trust, skill development and the manager keeping responsibility.",
      },
      {
        question: "A growing chain of 20 coffee shops is deciding whether to centralise or decentralise decisions. Evaluate the options.",
        answer:
          "Centralising suits decisions where consistency is the point: menu, pricing, branding and supplier contracts should be identical everywhere, or the brand stops meaning anything and bulk-buying power is lost. Decentralising suits decisions that depend on local knowledge — staffing rotas, opening hours, which local events to sponsor — where a head office cannot possibly know better than the manager on site. Full centralisation would make branches slow and demotivate managers into order-takers; full decentralisation would produce twenty different coffee shops sharing a logo. Overall the sensible answer is a mixture, centralising anything customers compare between branches and decentralising anything that varies by location. Mark this one yourself: the top band says WHICH decisions go where rather than choosing one wholesale.",
      },
      {
        question: "A TALL organisational structure has:",
        choices: [
          "Many layers and a narrow span of control",
          "Few layers and a wide span of control",
          "No managers at all",
          "Only part-time staff",
        ],
        accept: [
          "Many layers and a narrow span of control",
        ],
        answer: "Tall structures give close supervision and clear promotion routes, but communication is slower through more layers.",
      },
      {
        question: "The SPAN OF CONTROL is:",
        choices: [
          "The number of people a manager is directly responsible for",
          "The number of layers in the hierarchy",
          "The area a business trades in",
          "The range of products sold",
        ],
        accept: [
          "The number of people a manager is directly responsible for",
        ],
        answer: "A wide span means less supervision per person but fewer managers, so lower costs.",
      },
      {
        question: "DELEGATION means:",
        choices: [
          "Passing authority for a task down to a subordinate",
          "Removing a manager's job",
          "Hiring an external consultant",
          "Splitting the business in two",
        ],
        accept: [
          "Passing authority for a task down to a subordinate",
        ],
        answer: "It frees managers and develops staff, but the manager keeps ultimate responsibility if it goes wrong.",
      },
      {
        question: "A flat structure typically leads to:",
        choices: [
          "Faster communication and more employee autonomy",
          "Slower decision making",
          "More layers of management",
          "Narrower spans of control",
        ],
        accept: [
          "Faster communication and more employee autonomy",
        ],
        answer: "The trade-off is heavier workloads for managers and fewer promotion steps for staff.",
      },
      {
        question: "Centralised decision making means decisions are taken:",
        choices: [
          "By senior management at the top",
          "By each local branch",
          "By employees voting",
          "By customers",
        ],
        accept: [
          "By senior management at the top",
        ],
        answer: "Centralisation gives consistency and control; decentralisation gives local responsiveness and quicker decisions.",
      },
    ],
    misconceptions: [
      {
        wrong: "A flat structure means the business has no managers.",
        right:
          "It means few LEVELS of management, with each manager supervising more people. There is still a hierarchy, just a shorter one.",
      },
      {
        wrong: "Delegation means handing over responsibility.",
        right:
          "Authority is delegated; responsibility stays with the manager. If a delegated task goes wrong, the manager is still accountable.",
      },
      {
        wrong: "Decentralisation is always better because staff are motivated.",
        right:
          "It costs consistency, and for a chain whose selling point is that every branch is the same, that consistency may matter more than local motivation.",
      },
      {
        wrong: "Delayering just saves money.",
        right:
          "It also overloads remaining managers, removes promotion opportunities and damages morale through redundancies — which can cost more than the salaries saved.",
      },
    ],
  },

  "business/recruitment-and-selection": {
    summary:
      "Hiring the wrong person is expensive — the recruitment cost, the training, the work not done, and then doing it all again. This topic covers how businesses decide what they need, attract applicants, and choose between them, plus the legal rules that apply throughout.",
    keyFacts: [
      {
        heading: "The recruitment process",
        points: [
          "Identify the vacancy and decide whether the role is genuinely needed in its current form.",
          "Write a JOB DESCRIPTION: the duties, responsibilities and reporting lines of the post.",
          "Write a PERSON SPECIFICATION: the skills, qualifications and qualities the person needs.",
          "Advertise the vacancy in a place the right applicants will actually see.",
          "Shortlist, interview, select, and offer — then keep records in case a decision is challenged.",
        ],
      },
      {
        heading: "Internal and external recruitment",
        points: [
          "INTERNAL: appointing someone already employed by the business.",
          "Internal is cheaper and faster, the person is known, and it motivates staff by showing promotion is possible — but it brings no new ideas and leaves another vacancy.",
          "EXTERNAL: appointing someone from outside.",
          "External brings fresh skills and a wider pool, but costs more, takes longer and carries more risk.",
          "Methods include online job boards, the business's own website, social media, agencies, schools and colleges.",
        ],
      },
      {
        heading: "Selection methods",
        points: [
          "CV and application form, used to shortlist against the person specification.",
          "INTERVIEWS, which are the most common method and the least reliable on their own.",
          "Skills tests and practical tasks, which show what someone can actually do rather than what they say.",
          "Group tasks and presentations, used to observe teamwork and communication.",
          "References from previous employers, checked before a final offer.",
        ],
      },
      {
        heading: "Contracts and the law",
        points: [
          "FULL-TIME, PART-TIME, PERMANENT, TEMPORARY, ZERO-HOURS and FREELANCE describe different working arrangements.",
          "Zero-hours contracts give a business flexibility and give workers no guaranteed income — a genuine ethical debate.",
          "The Equality Act 2010 makes it unlawful to discriminate at any stage of recruitment.",
          "Adverts, questions and selection criteria must relate to the job, not to personal characteristics.",
          "Poor records make a discrimination claim much harder to defend, even where the decision was fair.",
        ],
      },
    ],
    flashcards: [
      { term: "Recruitment", definition: "The process of attracting people to apply for a job vacancy." },
      { term: "Selection", definition: "The process of choosing the most suitable applicant from those who applied." },
      { term: "Job description", definition: "A document setting out the duties, responsibilities and reporting lines of a post." },
      { term: "Person specification", definition: "A document setting out the skills, qualifications and qualities a candidate needs." },
      { term: "Internal recruitment", definition: "Filling a vacancy with someone who already works for the business." },
      { term: "External recruitment", definition: "Filling a vacancy with someone from outside the business." },
      { term: "Shortlisting", definition: "Reducing all applicants to a smaller group to be interviewed." },
      { term: "CV", definition: "A curriculum vitae — a summary of a person's education, experience and skills." },
      { term: "Reference", definition: "A statement from a previous employer about an applicant's work and conduct." },
      { term: "Full-time contract", definition: "An agreement to work a standard full working week, typically around 35 to 40 hours." },
      { term: "Part-time contract", definition: "An agreement to work fewer hours than a full-time employee." },
      { term: "Temporary contract", definition: "A contract lasting for a fixed period or until a particular task is complete." },
      { term: "Zero-hours contract", definition: "A contract with no guaranteed minimum hours, where work is offered as needed." },
      { term: "Freelance", definition: "Self-employed and hired for specific pieces of work rather than employed by the business." },
      { term: "Discrimination", definition: "Treating someone less favourably because of a protected characteristic such as age, race or sex." },
      { term: "Equality Act 2010", definition: "The law making discrimination unlawful, including at every stage of recruitment." },
    ],
    examTips: [
      {
        tip: "Job description and person specification are different documents",
        detail:
          "The job description describes the JOB; the person specification describes the PERSON. Swapping them is one of the most common errors here.",
      },
      {
        tip: "Give both sides of internal versus external",
        detail:
          "Internal is cheap, fast and motivating but brings no new ideas and leaves a gap. External brings fresh skills but costs more and is riskier.",
      },
      {
        tip: "Say WHY a selection method suits the job",
        detail:
          "A practical test for a chef, a presentation for a sales role. Matching method to job is what earns application marks.",
      },
      {
        tip: "Use the cost of getting it wrong",
        detail:
          "Recruitment fees, training, lost productivity and doing it all again. Quantifying that justifies spending more on selection.",
      },
      {
        tip: "Mention the Equality Act where relevant",
        detail:
          "Discrimination is unlawful at every stage — advert, shortlist, interview and offer. Naming the law shows precision.",
      },
      {
        tip: "Zero-hours contracts are an ethics question too",
        detail:
          "Flexibility for the business, insecurity for the worker. Good answers give both and reach a judgement rather than just defining the term.",
      },
    ],
    practice: [
      {
        question: "The document setting out the duties and responsibilities of a post is called the job ______.",
        accept: ["description", "job description"],
        answer:
          "The job description. It describes the JOB — remember the person specification describes the PERSON needed to do it.",
      },
      {
        question: "The document setting out the skills and qualities a candidate needs is called the person ______.",
        accept: ["specification", "person specification", "spec"],
        answer:
          "The person specification. It is what shortlisting is judged against, which is also what makes selection defensible if a decision is ever challenged.",
      },
      {
        question: "Filling a vacancy with someone who already works for the business is called ______ recruitment.",
        accept: ["internal", "internal recruitment"],
        answer:
          "Internal recruitment. It is cheaper and faster, and the candidate is a known quantity — but it brings no new ideas and creates another vacancy underneath.",
      },
      {
        question: "Filling a vacancy with someone from outside the business is called ______ recruitment.",
        accept: ["external", "external recruitment"],
        answer:
          "External recruitment. It widens the pool and brings fresh skills and perspectives, at higher cost and with more uncertainty about the person.",
      },
      {
        question: "Reducing all applicants to a smaller group for interview is called ______.",
        accept: ["shortlisting", "shortlist", "short listing"],
        answer:
          "Shortlisting. It should be done against the person specification, both because it is fairer and because it is far easier to defend if challenged.",
      },
      {
        question: "A statement from a previous employer about an applicant is called a ______.",
        accept: ["reference", "a reference", "references"],
        answer:
          "A reference. It is usually checked before a final offer, and it verifies claims that an interview alone cannot test.",
      },
      {
        question: "A contract with no guaranteed minimum hours is called a ______ contract.",
        accept: ["zero-hours", "zero hours", "zerohours"],
        answer:
          "A zero-hours contract. It gives the business flexibility to match staffing to demand and gives the worker no guaranteed income — a genuine ethical debate.",
      },
      {
        question: "Someone self-employed and hired for specific pieces of work is called a ______.",
        accept: ["freelancer", "freelance", "contractor"],
        answer:
          "A freelancer. The business pays only for the work done and avoids employment obligations, but has less control and no long-term commitment.",
      },
      {
        question: "Which Act makes it unlawful to discriminate during recruitment?",
        accept: ["equality act", "equality act 2010", "the equality act"],
        answer:
          "The Equality Act 2010. It applies to the advert, the shortlist, the interview questions and the offer — every stage, not just the final decision.",
      },
      {
        question: "A summary of a person's education, experience and skills is called a ______.",
        accept: ["cv", "curriculum vitae", "c.v"],
        answer:
          "A CV (curriculum vitae). It is the main shortlisting tool, which is why it should be checked against the person specification rather than skimmed.",
      },
      {
        question: "Which selection method best shows what a chef can actually do?",
        accept: ["practical test", "skills test", "practical task", "test", "cooking test", "trial", "practical"],
        answer:
          "A practical test or trial shift. Interviews test how well someone talks about cooking; a practical task tests whether they can cook.",
      },
      {
        question: "Give one drawback of internal recruitment.",
        accept: ["no new ideas", "creates another vacancy", "limited pool", "no fresh ideas", "smaller pool", "resentment", "no new skills"],
        answer:
          "It brings no new ideas or outside experience, the pool of candidates is small, and promoting someone simply moves the vacancy elsewhere in the business.",
      },
      {
        question: "Give one cost of recruiting the wrong person.",
        accept: ["training costs", "recruitment costs", "lost productivity", "cost of rehiring", "wasted time", "poor work", "wasted money", "low morale"],
        answer:
          "The advertising and interview costs, the training given, the work done badly or not at all, and then the whole cost again to replace them.",
      },
      {
        question: "True or false: an interview on its own is a reliable way to predict job performance.",
        accept: ["false", "f"],
        answer:
          "False. Interviews favour confident talkers and are affected by first impressions. Combining them with practical tests and references is far more reliable.",
      },
      {
        question: "Explain why a business might recruit internally rather than externally. Write two or three sentences.",
        answer:
          "The candidate is already known — their reliability and how they work with others has been observed rather than claimed — so the risk of a bad appointment is much lower. It is also cheaper and faster, with no advertising or agency fees and less induction needed since they already understand the business. And visible promotion motivates other staff, because it shows that working hard leads somewhere. Mark this one yourself: credit yourself for reduced risk, lower cost and the motivational effect on everyone else.",
      },
      {
        question: "A small café needs staff for an unpredictable summer season and is considering zero-hours contracts. Evaluate this.",
        answer:
          "The business case is real: demand depends on weather and tourists, and paying guaranteed hours during a wet fortnight could be unaffordable for a small café with thin margins. Zero-hours contracts let staffing follow demand exactly. But workers cannot plan or budget around an income that might be nothing, which makes it hard to attract and keep good staff — turnover rises, and constant retraining costs money and damages service. There is also a reputational risk in a small town where staff talk. Alternatives include a small guaranteed core of hours with flexible extra shifts, or hiring students who genuinely want irregular work. Overall a guaranteed minimum with flexible additional hours is likely to be better, since it keeps most of the flexibility while giving staff enough security to stay. Mark this one yourself: the top band needs the effect on RETENTION and a workable middle option.",
      },
      {
        question: "What is INTERNAL recruitment?",
        choices: [
          "Filling a vacancy with someone already employed by the business",
          "Advertising in a national newspaper",
          "Using a recruitment agency",
          "Hiring a school leaver",
        ],
        accept: [
          "Filling a vacancy with someone already employed by the business",
        ],
        answer: "It is cheaper and quicker and the person is known, but brings no new ideas and leaves another vacancy behind.",
      },
      {
        question: "A JOB DESCRIPTION sets out:",
        choices: [
          "The duties and responsibilities of the role",
          "The qualities the applicant needs",
          "The salary negotiation range",
          "The company's annual accounts",
        ],
        accept: [
          "The duties and responsibilities of the role",
        ],
        answer: "A person specification describes the PERSON — skills, qualifications and qualities. The two are easily confused.",
      },
      {
        question: "Which document lists the skills and qualities a candidate should have?",
        choices: [
          "The person specification",
          "The job description",
          "The contract of employment",
          "The application form",
        ],
        accept: [
          "The person specification",
        ],
        answer: "It usually splits requirements into essential and desirable, which is how a long list of applicants gets shortlisted.",
      },
      {
        question: "An advantage of EXTERNAL recruitment is:",
        choices: [
          "It brings in fresh ideas and a wider pool of talent",
          "It is always cheaper",
          "No induction training is needed",
          "The candidate is already known",
        ],
        accept: [
          "It brings in fresh ideas and a wider pool of talent",
        ],
        answer: "The costs are higher advertising spend, longer selection and more induction training.",
      },
      {
        question: "A part-time contract differs from a full-time one mainly in:",
        choices: [
          "The number of hours worked each week",
          "The legal rights of the employee",
          "Whether tax is paid",
          "Whether a contract exists",
        ],
        accept: [
          "The number of hours worked each week",
        ],
        answer: "Part-time staff have the same core employment rights. Flexibility helps businesses cope with variable demand.",
      },
    ],
    misconceptions: [
      {
        wrong: "A job description and a person specification are the same document.",
        right:
          "The job description describes the job — duties and responsibilities. The person specification describes the person — skills and qualities needed.",
      },
      {
        wrong: "External recruitment is always better because you get the best candidate.",
        right:
          "It costs more, takes longer and is riskier, because you know far less about someone than about a colleague you have watched for two years.",
      },
      {
        wrong: "An interview is enough to choose the right person.",
        right:
          "Interviews reward confidence rather than competence. Practical tests, references and tasks predict performance far better.",
      },
      {
        wrong: "Zero-hours contracts are illegal.",
        right:
          "They are lawful in the UK. Whether they are FAIR is an ethical question, and the answer usually depends on whether the worker wants flexibility too.",
      },
    ],
  },

  "business/training-and-motivation": {
    summary:
      "Two questions sit behind this topic: can your staff do the job, and do they want to? Training answers the first, motivation the second, and a business needs both — a well-trained employee who has stopped caring is as much of a problem as a keen one who does not know what they are doing.",
    keyFacts: [
      {
        heading: "Types of training",
        points: [
          "INDUCTION training introduces a new employee to the business, the people and the procedures.",
          "ON-THE-JOB training happens while doing the work — shadowing, mentoring, learning by doing.",
          "On-the-job is cheap and directly relevant, but bad habits can be passed on and output suffers while learning.",
          "OFF-THE-JOB training happens away from the workplace — a course, a college, an outside trainer.",
          "Off-the-job brings wider expertise and no distractions, but costs more and the employee is not working.",
        ],
      },
      {
        heading: "Why train at all",
        points: [
          "Better skills mean higher productivity and better quality.",
          "Fewer accidents and mistakes, which reduces cost and legal risk.",
          "Staff feel valued and are more likely to stay, cutting recruitment costs.",
          "It allows internal promotion, which is cheaper and more motivating than external recruitment.",
          "The classic objection — 'what if we train them and they leave?' — is answered by 'what if we don't and they stay?'",
        ],
      },
      {
        heading: "Financial motivation",
        points: [
          "SALARY is a fixed annual amount; WAGES are usually paid per hour or per week.",
          "PIECE RATE pays per item produced, which raises output but can damage quality.",
          "COMMISSION pays a percentage of sales, common in selling roles.",
          "BONUS is an extra payment for hitting a target; PROFIT SHARING gives staff a share of company profit.",
          "FRINGE BENEFITS are non-cash extras: staff discounts, a company car, health insurance, a pension.",
        ],
      },
      {
        heading: "Non-financial motivation",
        points: [
          "JOB ROTATION: moving between tasks to reduce boredom.",
          "JOB ENLARGEMENT: adding more tasks at the same level of responsibility.",
          "JOB ENRICHMENT: adding more challenging tasks with greater responsibility.",
          "Praise, recognition, autonomy, teamwork and clear promotion routes all motivate without direct cost.",
          "Maslow argued needs run from basic (pay, safety) up to esteem and self-fulfilment — pay stops motivating once the lower needs are met.",
        ],
      },
    ],
    flashcards: [
      { term: "Training", definition: "Teaching employees the skills and knowledge they need to do their job well." },
      { term: "Induction training", definition: "Training given to a new employee to introduce them to the business and its procedures." },
      { term: "On-the-job training", definition: "Learning while actually doing the work, often by shadowing an experienced colleague." },
      { term: "Off-the-job training", definition: "Training away from the workplace, such as a course or qualification." },
      { term: "Motivation", definition: "The desire and willingness of an employee to work well and put in effort." },
      { term: "Salary", definition: "A fixed annual amount of pay, usually paid in monthly instalments." },
      { term: "Wages", definition: "Pay calculated by the hour or week, usually for work with variable hours." },
      { term: "Piece rate", definition: "Payment based on the number of items produced." },
      { term: "Commission", definition: "Payment based on a percentage of the sales an employee makes." },
      { term: "Bonus", definition: "An extra payment made for achieving a target or for good performance." },
      { term: "Profit sharing", definition: "Giving employees a share of the business's profit." },
      { term: "Fringe benefits", definition: "Non-cash rewards such as staff discounts, a pension, health insurance or a company car." },
      { term: "Job rotation", definition: "Moving employees between different tasks to reduce boredom and build skills." },
      { term: "Job enlargement", definition: "Giving an employee more tasks at the same level of responsibility." },
      { term: "Job enrichment", definition: "Giving an employee more challenging work with greater responsibility." },
      { term: "Maslow's hierarchy of needs", definition: "A theory that human needs run from basic physical needs up to esteem and self-fulfilment." },
      { term: "Staff turnover", definition: "The rate at which employees leave a business and have to be replaced." },
      { term: "Retention", definition: "Keeping employees so that they do not leave for another employer." },
    ],
    examTips: [
      {
        tip: "Enlargement and enrichment are different",
        detail:
          "Enlargement is MORE tasks at the same level; enrichment is HARDER tasks with more responsibility. Examiners test this distinction directly.",
      },
      {
        tip: "Link motivation to a measurable outcome",
        detail:
          "Higher productivity, lower staff turnover, better quality, fewer mistakes. Naming the outcome turns a description into analysis.",
      },
      {
        tip: "Remember pay is not always the answer",
        detail:
          "Once basic needs are met, recognition, responsibility and progression often matter more — and they are cheaper. That point earns marks in evaluation.",
      },
      {
        tip: "Give the drawback of piece rate",
        detail:
          "It raises output and can wreck quality, since workers are paid for quantity. The standard fix is combining it with quality checks.",
      },
      {
        tip: "Cost training against turnover",
        detail:
          "Training costs money and the person might leave — but untrained staff are less productive and leave more often anyway. Weigh both.",
      },
      {
        tip: "Match the method to the job and the person",
        detail:
          "A bored production worker may want rotation; an ambitious graduate wants enrichment. Recommending the same thing for everyone misses the point.",
      },
    ],
    practice: [
      {
        question: "Training given to a new employee when they first join is called ______ training.",
        accept: ["induction", "induction training"],
        answer:
          "Induction training. It covers procedures, safety and who's who, and doing it properly reduces early mistakes and the chance of a new starter leaving quickly.",
      },
      {
        question: "Learning while actually doing the work is called ______ training.",
        accept: ["on-the-job", "on the job", "onthejob", "on-the-job training"],
        answer:
          "On-the-job training. It is cheap and directly relevant, but the trainer's bad habits get passed on and output is lower while learning happens.",
      },
      {
        question: "Training away from the workplace, such as a college course, is called ______ training.",
        accept: ["off-the-job", "off the job", "offthejob", "off-the-job training"],
        answer:
          "Off-the-job training. It brings expertise the business does not have internally, but costs more and the employee is not producing anything while away.",
      },
      {
        question: "Payment based on the number of items produced is called ______ rate.",
        accept: ["piece", "piece rate", "piecework"],
        answer:
          "Piece rate. It raises output sharply and can damage quality just as sharply, since workers are being paid for quantity rather than care.",
      },
      {
        question: "Payment as a percentage of the sales an employee makes is called ______.",
        accept: ["commission"],
        answer:
          "Commission. It links reward directly to results, which motivates strongly — but can encourage pressure selling that damages customer relationships.",
      },
      {
        question: "Giving employees a share of the company's profit is called profit ______.",
        accept: ["sharing", "profit sharing", "share"],
        answer:
          "Profit sharing. It gives staff a stake in overall success rather than just their own output, which encourages cooperation between departments.",
      },
      {
        question: "Non-cash rewards such as staff discounts and a pension are called ______ benefits.",
        accept: ["fringe", "fringe benefits", "perks"],
        answer:
          "Fringe benefits. They can be cheaper for the business than the equivalent pay rise while being worth more to the employee, which is why they are so common.",
      },
      {
        question: "Moving employees between different tasks to reduce boredom is called job ______.",
        accept: ["rotation", "job rotation"],
        answer:
          "Job rotation. It also builds a more flexible workforce, since more people can cover more roles when somebody is absent.",
      },
      {
        question: "Giving an employee more tasks at the same level of responsibility is called job ______.",
        accept: ["enlargement", "job enlargement"],
        answer:
          "Job enlargement. Note it is MORE work at the SAME level — if it does not add responsibility, it can be experienced as simply being given more to do.",
      },
      {
        question: "Giving an employee more challenging work with greater responsibility is called job ______.",
        accept: ["enrichment", "job enrichment"],
        answer:
          "Job enrichment. This is the one that adds responsibility, which is why it motivates more strongly than enlargement — and why the two must not be confused.",
      },
      {
        question: "Whose theory describes needs running from basic physical needs up to self-fulfilment?",
        accept: ["maslow", "maslow's", "abraham maslow", "maslows"],
        answer:
          "Maslow. His hierarchy explains why a pay rise stops motivating once someone is comfortable — the unmet needs by then are esteem and fulfilment, not money.",
      },
      {
        question: "The rate at which employees leave and must be replaced is called staff ______.",
        accept: ["turnover", "staff turnover", "labour turnover"],
        answer:
          "Staff turnover. High turnover is expensive — constant recruitment and retraining — and is usually the clearest measurable sign of poor motivation.",
      },
      {
        question: "A fixed annual amount of pay is called a ______.",
        accept: ["salary", "a salary"],
        answer:
          "A salary, usually paid monthly. Wages, by contrast, are calculated by the hour or week and vary with the hours actually worked.",
      },
      {
        question: "Give one non-financial way to motivate staff.",
        accept: ["praise", "recognition", "responsibility", "job rotation", "job enrichment", "promotion", "teamwork", "training", "autonomy", "job enlargement", "thanks"],
        answer:
          "Praise and recognition, more responsibility, job rotation or enrichment, teamwork, training and clear promotion routes. Most cost little or nothing.",
      },
      {
        question: "Explain why a business might train staff even though trained staff can leave. Write two or three sentences.",
        answer:
          "Trained staff are more productive, make fewer mistakes and produce better quality, so the business gets a return long before anyone leaves. Training also makes people MORE likely to stay, not less, because being invested in signals that they are valued and opens routes to promotion. The alternative — untrained staff who are unproductive and feel stuck — usually produces higher turnover anyway. Mark this one yourself: credit yourself for the productivity return and for the point that training improves retention rather than harming it.",
      },
      {
        question: "A factory has high staff turnover and repetitive work. Evaluate how it could improve motivation.",
        answer:
          "Pay is the obvious lever and the least reliable one: a rise motivates briefly, is expensive permanently, and does nothing about work that is boring. Since the problem is repetitive tasks, job rotation would directly address the cause by giving variety and building a more flexible workforce, at the cost of some retraining and a short-term dip in output. Job enrichment — letting teams manage their own quality checks and rotas — would add responsibility and is cheap, though not everyone wants it. Recognition schemes and clear promotion routes cost little and address the esteem needs Maslow describes. Overall, rotation combined with enrichment tackles the actual cause, whereas a pay rise treats the symptom; but the business should ask its own staff first, since assuming what motivates people is how expensive schemes fail. Mark this one yourself: the top band identifies that the CAUSE is the repetitive work and matches the solution to it.",
      },
      {
        question: "What is INDUCTION training?",
        choices: [
          "Training given to new employees when they join",
          "Training to gain a professional qualification",
          "Training given only to managers",
          "Retraining after a promotion",
        ],
        accept: [
          "Training given to new employees when they join",
        ],
        answer: "It covers the workplace, procedures and health and safety, and helps new staff become productive faster.",
      },
      {
        question: "On-the-job training means learning:",
        choices: [
          "While doing the actual job in the workplace",
          "At a college away from work",
          "Only through online courses",
          "Before being offered the job",
        ],
        accept: [
          "While doing the actual job in the workplace",
        ],
        answer: "It is cheaper and immediately relevant, but the trainer's output falls and bad habits can be passed on.",
      },
      {
        question: "Which is a FINANCIAL method of motivation?",
        choices: [
          "A bonus for meeting targets",
          "Job rotation",
          "Praise from a manager",
          "More responsibility",
        ],
        accept: [
          "A bonus for meeting targets",
        ],
        answer: "Pay, bonuses, commission and fringe benefits are financial. Job enrichment, autonomy and praise are non-financial.",
      },
      {
        question: "Job ROTATION motivates staff by:",
        choices: [
          "Adding variety through moving between tasks",
          "Increasing pay for each task",
          "Reducing the hours worked",
          "Removing supervision entirely",
        ],
        accept: [
          "Adding variety through moving between tasks",
        ],
        answer: "Job enlargement adds more tasks at the same level; job enrichment adds more responsibility and challenge.",
      },
      {
        question: "A well-motivated workforce is likely to have:",
        choices: [
          "Lower staff turnover and higher productivity",
          "Higher absence rates",
          "Greater recruitment costs",
          "Lower quality output",
        ],
        accept: [
          "Lower staff turnover and higher productivity",
        ],
        answer: "Retention matters financially — replacing an employee costs far more than keeping one.",
      },
    ],
    misconceptions: [
      {
        wrong: "Money is the only thing that really motivates people.",
        right:
          "Pay matters most when basic needs are unmet. Beyond that, recognition, responsibility and progression usually motivate more — and cost far less.",
      },
      {
        wrong: "Job enlargement and job enrichment are the same.",
        right:
          "Enlargement adds MORE tasks at the same level. Enrichment adds HARDER tasks with more responsibility. Only enrichment increases authority.",
      },
      {
        wrong: "Training is a cost with no return if staff leave.",
        right:
          "Trained staff are more productive immediately, and being trained makes people more likely to stay. Untrained, unvalued staff leave more often.",
      },
      {
        wrong: "Piece rate is the best way to raise output.",
        right:
          "It raises quantity and often destroys quality, because workers are paid for how many, not how well. It needs quality checks alongside it.",
      },
      {
        wrong: "A motivated workforce just means happier staff.",
        right:
          "It shows up in measurable things: higher productivity, lower turnover, fewer errors and better customer service. That is why it is a business topic.",
      },
    ],
  },

  "business/technology-in-business": {
    summary:
      "Technology has changed what a business can sell, who it can sell to, and how many people it needs to do it. This topic covers e-commerce, digital communication, payment systems and the data businesses now collect — along with the costs, the security risks and the jobs that change or disappear.",
    keyFacts: [
      {
        heading: "E-commerce and m-commerce",
        points: [
          "E-COMMERCE is buying and selling online; M-COMMERCE is doing it through mobile devices.",
          "It removes the need for a physical shop, cutting rent and business rates dramatically.",
          "It widens the market from a local area to the whole country or the world.",
          "It allows selling 24 hours a day without staffing costs for those hours.",
          "But competition is now global, delivery and returns cost money, and customers cannot handle the product before buying.",
        ],
      },
      {
        heading: "Digital communication and payment",
        points: [
          "Social media allows cheap, precisely targeted promotion and two-way contact with customers.",
          "Email, video calls and messaging make remote and international working practical.",
          "Contactless and mobile payments speed up transactions and reduce queues.",
          "Online booking and ordering systems cut staff time and reduce mistakes.",
          "Every one of these leaves a data trail that the business can analyse.",
        ],
      },
      {
        heading: "Data and automation",
        points: [
          "Businesses collect data on what customers buy, when, and what they looked at first.",
          "That data supports stock decisions, pricing, targeted advertising and personalised recommendations.",
          "Automated systems handle stock control, accounting, payroll and increasingly customer enquiries.",
          "Automation raises consistency and cuts labour costs, but requires investment and reduces jobs.",
          "Data protection law governs what may be collected and stored, with serious fines for breaches.",
        ],
      },
      {
        heading: "Costs and risks",
        points: [
          "Setting up systems costs money, and so does maintaining, updating and securing them.",
          "Staff need training, and some will resist the change.",
          "Cybercrime is a genuine threat: fraud, ransomware and data theft affect businesses of every size.",
          "A system failure can stop trading completely, which is a risk that did not exist for a cash-only shop.",
          "Technology dates quickly, so what was an advantage becomes the minimum customers expect.",
        ],
      },
    ],
    flashcards: [
      { term: "E-commerce", definition: "Buying and selling goods or services over the internet." },
      { term: "M-commerce", definition: "Buying and selling through mobile devices such as phones and tablets." },
      { term: "Digital communication", definition: "Contacting customers and colleagues electronically, through email, social media or messaging." },
      { term: "Social media marketing", definition: "Promoting a business through social platforms, usually targeted at specific groups." },
      { term: "Contactless payment", definition: "Paying by tapping a card or phone, without entering a PIN for small amounts." },
      { term: "Automation", definition: "Using machines or software to carry out tasks previously done by people." },
      { term: "Data analytics", definition: "Examining collected data to find patterns that inform business decisions." },
      { term: "Personalisation", definition: "Tailoring products, offers or recommendations to an individual customer's behaviour." },
      { term: "Cybercrime", definition: "Criminal activity carried out using computers, such as fraud, hacking or ransomware." },
      { term: "Data protection", definition: "The legal rules controlling how personal information is collected, stored and used." },
      { term: "Cloud computing", definition: "Storing data and running software on remote servers accessed over the internet." },
      { term: "Website", definition: "A business's own online presence, used to inform, sell and build a brand." },
      { term: "Search engine optimisation (SEO)", definition: "Improving a website so it appears higher in search results." },
      { term: "Digital divide", definition: "The gap between those with good access to technology and those without." },
      { term: "Remote working", definition: "Working away from the employer's premises, made possible by digital communication." },
      { term: "Stock control system", definition: "Software that tracks stock levels automatically and reorders when levels fall." },
    ],
    examTips: [
      {
        tip: "Give the cost as well as the benefit",
        detail:
          "Technology saves money and costs money — setup, training, maintenance, security. Answers listing only benefits cannot reach the top band.",
      },
      {
        tip: "E-commerce widens the market AND the competition",
        detail:
          "A small shop can now sell nationally, and now competes with everyone who can do the same. Both halves matter.",
      },
      {
        tip: "Name the specific technology",
        detail:
          "'Uses technology' scores nothing. 'An online booking system that reduces no-shows and frees a member of staff' scores properly.",
      },
      {
        tip: "Remember the stakeholder effect of automation",
        detail:
          "Lower costs for owners, lost jobs for employees. Recognising the conflict is worth more than describing the efficiency gain.",
      },
      {
        tip: "Technology becomes the minimum expected",
        detail:
          "Card payments were once an advantage and are now assumed. That framing — advantage becoming expectation — is a strong evaluation point.",
      },
      {
        tip: "Link data collection to the law",
        detail:
          "Collecting customer data brings data protection obligations and real fines. Mentioning that shows you see the risk as well as the opportunity.",
      },
    ],
    practice: [
      {
        question: "Buying and selling over the internet is called ______.",
        accept: ["e-commerce", "ecommerce", "e commerce", "online selling"],
        answer:
          "E-commerce. It removes the need for a shop and widens the market enormously, while exposing the business to competitors anywhere in the world.",
      },
      {
        question: "Buying and selling through phones and tablets is called ______.",
        accept: ["m-commerce", "mcommerce", "m commerce", "mobile commerce"],
        answer:
          "M-commerce. Most online shopping now happens on phones, which is why a site that works badly on a small screen loses sales directly.",
      },
      {
        question: "Improving a website so it appears higher in search results is called search engine ______.",
        accept: ["optimisation", "optimization", "seo", "search engine optimisation"],
        answer:
          "Search engine optimisation (SEO). It matters because most customers never look past the first page of results, so ranking is effectively visibility.",
      },
      {
        question: "Using machines or software to do tasks previously done by people is called ______.",
        accept: ["automation", "automating"],
        answer:
          "Automation. It raises consistency and cuts labour costs, but needs investment and reduces jobs — a genuine stakeholder conflict, not just an efficiency gain.",
      },
      {
        question: "Storing data and running software on remote servers over the internet is called ______ computing.",
        accept: ["cloud", "cloud computing"],
        answer:
          "Cloud computing. It avoids buying and maintaining servers and lets staff work anywhere, but makes the business dependent on its internet connection.",
      },
      {
        question: "Criminal activity carried out using computers is called ______.",
        accept: ["cybercrime", "cyber crime", "cyber-crime"],
        answer:
          "Cybercrime. Small businesses are targeted precisely because their security is usually weaker, so 'we're too small to be a target' is a dangerous assumption.",
      },
      {
        question: "Examining collected data to find useful patterns is called data ______.",
        accept: ["analytics", "data analytics", "analysis"],
        answer:
          "Data analytics. It turns records of what customers did into decisions about stock, pricing and advertising — market research that arrives automatically.",
      },
      {
        question: "Working away from the employer's premises is called ______ working.",
        accept: ["remote", "remote working", "home", "flexible"],
        answer:
          "Remote working. It widens the pool of possible employees and cuts office costs, but makes supervision, communication and team culture harder.",
      },
      {
        question: "Tailoring recommendations to an individual customer's behaviour is called ______.",
        accept: ["personalisation", "personalization", "personalising"],
        answer:
          "Personalisation. It increases sales by showing customers things they are likely to want, but feels intrusive if pushed too far — a judgement, not a formula.",
      },
      {
        question: "The gap between those with good access to technology and those without is called the digital ______.",
        accept: ["divide", "digital divide"],
        answer:
          "The digital divide. It matters commercially: a business that moves entirely online loses customers who cannot or will not use it.",
      },
      {
        question: "Software that tracks stock levels and reorders automatically is called a stock ______ system.",
        accept: ["control", "stock control", "control system", "management"],
        answer:
          "A stock control system. It reduces both stockouts and overstocking at once, which is difficult to achieve by hand in a business of any size.",
      },
      {
        question: "Give one cost to a business of introducing new technology.",
        accept: ["setup cost", "training", "maintenance", "equipment", "cost", "software", "staff resistance", "updates", "security"],
        answer:
          "The initial purchase, staff training, ongoing maintenance and updates, and security. There is also disruption while people learn the new system.",
      },
      {
        question: "True or false: e-commerce reduces the amount of competition a small business faces.",
        accept: ["false", "f"],
        answer:
          "False. It widens your market and widens everyone else's at the same time, so a local shop now competes with sellers nationwide rather than the shop down the road.",
      },
      {
        question: "Which area of law applies when a business stores customer data?",
        accept: ["data protection", "gdpr", "data protection law", "uk gdpr"],
        answer:
          "Data protection law. It governs what may be collected, how long it is kept and what customers can demand, with fines large enough to matter to any business.",
      },
      {
        question: "Explain why a small shop might open an online store as well as its physical one. Write two or three sentences.",
        answer:
          "It widens the market from people who can walk past the shop to anyone in the country, and it can sell overnight and at weekends without paying for staff to be there. The costs are far lower than opening a second shop — no rent, no rates, no extra staff. The trade-offs are delivery and returns costs, the need to be found among many online competitors, and the work of keeping the site and its stock accurate. Mark this one yourself: credit yourself for the wider market, the low cost compared with a second branch, and at least one drawback.",
      },
      {
        question: "A traditional bookshop is considering replacing two staff with self-service checkouts. Evaluate the decision.",
        answer:
          "The financial case is straightforward: two salaries saved every year against a one-off cost, plus faster queues at busy times. But a bookshop's advantage over buying online is precisely the human part — staff who recommend books, know regulars and make browsing pleasant. Removing them attacks the reason customers come in rather than ordering from a website that is always cheaper. There is also the stakeholder cost of two redundancies in a small business, and the risk that older customers dislike self-service. A better option might be one self-service point for quick purchases while keeping staff for advice, capturing some saving without losing the differentiator. Overall, replacing both would be a mistake because it makes the shop more like the competitor it cannot beat on price. Mark this one yourself: the top band recognises that the staff ARE the competitive advantage here.",
      },
      {
        question: "E-commerce means:",
        choices: [
          "Selling goods and services online",
          "Using email inside a business",
          "Automating a factory",
          "Storing files digitally",
        ],
        accept: [
          "Selling goods and services online",
        ],
        answer: "It gives access to a national or global market with lower overheads than physical shops, but competition is fierce.",
      },
      {
        question: "Which is a drawback of introducing new technology?",
        choices: [
          "High upfront cost and the need to retrain staff",
          "Products become lower quality",
          "Customers cannot be reached",
          "Productivity always falls",
        ],
        accept: [
          "High upfront cost and the need to retrain staff",
        ],
        answer: "There is also the risk of it becoming obsolete quickly, and of resistance from staff who fear for their jobs.",
      },
      {
        question: "Digital communication such as video calls mainly helps a business by:",
        choices: [
          "Reducing travel costs and speeding up decisions",
          "Removing the need for employees",
          "Guaranteeing higher sales",
          "Eliminating competition",
        ],
        accept: [
          "Reducing travel costs and speeding up decisions",
        ],
        answer: "It also makes remote and flexible working practical, which widens the pool of people a business can recruit from.",
      },
      {
        question: "Payment technology such as contactless benefits retailers by:",
        choices: [
          "Speeding up transactions and shortening queues",
          "Removing the need for stock",
          "Eliminating all fraud",
          "Reducing staff wages directly",
        ],
        accept: [
          "Speeding up transactions and shortening queues",
        ],
        answer: "Faster service means more customers served per hour, though card processing carries a fee per transaction.",
      },
      {
        question: "Using data about customer purchases allows a business to:",
        choices: [
          "Target marketing and manage stock more accurately",
          "Ignore market research entirely",
          "Avoid data protection law",
          "Set any price it likes",
        ],
        accept: [
          "Target marketing and manage stock more accurately",
        ],
        answer: "It must still comply with data protection law, and customers increasingly care how their data is used.",
      },
    ],
    misconceptions: [
      {
        wrong: "Technology always reduces a business's costs.",
        right:
          "It shifts them. Setup, training, maintenance, security and updates all cost money, and a failed implementation can cost far more than it saved.",
      },
      {
        wrong: "Selling online means you no longer need premises.",
        right:
          "You still need somewhere to hold stock, pack orders and handle returns. The cost moves from a shop to a storeroom rather than disappearing.",
      },
      {
        wrong: "Automation is good for everyone because it makes things efficient.",
        right:
          "It benefits owners through lower costs and harms employees whose jobs go. Recognising that stakeholder conflict is part of the answer.",
      },
      {
        wrong: "Small businesses aren't targeted by cybercrime.",
        right:
          "They are targeted precisely because their security is usually weaker, and they are least able to absorb the cost of an attack.",
      },
      {
        wrong: "Having a website is a competitive advantage.",
        right:
          "It was twenty years ago; now it is the minimum customers expect. Technology reliably turns from an advantage into an expectation.",
      },
    ],
  },
};
