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
};
