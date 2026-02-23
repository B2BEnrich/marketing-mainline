import type { Category } from "@/components/blocks/faq";

// ─────────────────────────────────────────────
// Home Page  /
// ─────────────────────────────────────────────
export const homeFAQ: Category[] = [
  {
    title: "B2B Data Enrichment API",
    questions: [
      {
        question: "What is the B2BEnrich data enrichment API?",
        answer:
          "B2BEnrich is a B2B data enrichment API that turns partial identifiers — an email, a company domain, or a profile URL — into complete professional and firmographic profiles. Access 550M+ contacts and 50M+ companies via a simple RESTful API. Each enrichment call returns 250+ data points including verified emails, job titles, company revenue, employee count, and technology stack. It costs 1 credit per call.",
      },
      {
        question: "What makes B2BEnrich different from other B2B data providers?",
        answer:
          "Unlike static B2B databases that go stale, B2BEnrich provides real-time data enrichment through a developer-first API. We cover people enrichment, company enrichment, email verification, people search, company search, and advanced prospecting — all in one platform. Our data is GDPR-compliant, continuously refreshed, and priced per call with no seat fees or minimum commitments.",
      },
      {
        question: "Which data enrichment tools and use cases does B2BEnrich support?",
        answer:
          "B2BEnrich supports lead enrichment on form fill, CRM data enrichment (HubSpot, Salesforce, Clay), B2B prospecting with 30+ filters, bulk contact data enrichment, email validation, company tech stack detection, and AI agent data pipelines. It's used by product teams, sales ops teams, and growth engineers who need reliable B2B data at scale.",
      },
      {
        question: "How does the credit-based pricing work?",
        answer:
          "Every API call consumes credits from your account balance. Most enrichment and validation endpoints cost 1 credit per request. Prospector search costs 5 credits. You can check your remaining balance at any time via the API. Credits never expire, and you can purchase more at any time without upgrading to a higher tier.",
      },
    ],
  },
  {
    title: "Data & Coverage",
    questions: [
      {
        question: "How many contacts and companies are in the B2BEnrich database?",
        answer:
          "B2BEnrich covers 550M+ professional profiles and 50M+ companies worldwide. The database spans every major industry, company size, and geography. Each contact record includes job title, company, location, and where available a verified email address. Each company record includes industry, revenue range, employee count, tech stack, funding data, and headquarters location.",
      },
      {
        question: "Is the data GDPR-compliant?",
        answer:
          "Yes. B2BEnrich only indexes publicly available professional data. We provide mechanisms for data subject access requests and comply with GDPR, CCPA, and other applicable data privacy regulations. All API traffic is encrypted via HTTPS.",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// /solutions/data-enrichment
// ─────────────────────────────────────────────
export const dataEnrichmentFAQ: Category[] = [
  {
    title: "Data Enrichment Fundamentals",
    questions: [
      {
        question: "What is data enrichment and how does it work?",
        answer:
          "Data enrichment is the process of supplementing existing records with additional verified information from external sources. You send a known identifier — an email, a company domain, or a profile URL — to our data enrichment API, and it returns a complete profile. The process is real-time: a typical enrichment call resolves in under 500ms and appends job titles, verified emails, company firmographics, and tech stack data in a single response.",
      },
      {
        question: "What data enrichment services does B2BEnrich offer?",
        answer:
          "B2BEnrich offers a full suite of data enrichment services: people enrichment (email → full profile), company enrichment (domain → firmographics), email verification, phone validation, people search, company search, and prospector search with 30+ filters. All services are delivered via REST API and support real-time single-record and bulk batch processing.",
      },
      {
        question: "What are the best data enrichment tools for B2B companies?",
        answer:
          "The best data enrichment tools for B2B combine coverage depth, data freshness, and API reliability. B2BEnrich offers all three: 550M+ professional profiles, continuous data refreshes, and a developer-friendly API. For CRM-native teams, we integrate with HubSpot, Salesforce, and Clay. For product teams, we provide direct REST API access with credit-based pricing — no seat licenses.",
      },
      {
        question: "What is CRM data enrichment?",
        answer:
          "CRM data enrichment is the practice of automatically appending fresh, verified data to your CRM contact and account records. When triggered on new record creation or on a scheduled cadence, a CRM enrichment API call updates job titles, emails, company sizes, and tech stack fields — keeping your pipeline data complete and preventing data decay. B2BEnrich supports direct API integration with any CRM.",
      },
    ],
  },
  {
    title: "Using the Enrichment API",
    questions: [
      {
        question: "What contact data enrichment techniques work best at scale?",
        answer:
          "The most effective contact data enrichment techniques at scale are: (1) real-time enrichment triggered on record creation, (2) scheduled bulk re-enrichment every 60–90 days to counter data decay, and (3) waterfall enrichment that tries multiple identifiers — profile URL first, then email, then name + domain. B2BEnrich supports all three patterns through its RESTful API.",
      },
      {
        question: "How many data points does each enrichment call return?",
        answer:
          "A people enrichment call returns up to 250+ data points including full name, current job title, job function, seniority level, company name, company domain, verified email, phone numbers, and location. A company enrichment call returns industry, employee range, revenue range, funding data, HQ location, and full technology stack across 15+ tech categories.",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// /solutions/data-extraction
// ─────────────────────────────────────────────
export const dataExtractionFAQ: Category[] = [
  {
    title: "Data Extraction API",
    questions: [
      {
        question: "What is B2B data extraction?",
        answer:
          "B2B data extraction is the process of systematically retrieving structured professional and company data from large datasets via API. Rather than manually sourcing data, you query our data extraction API with filters — job title, industry, location, tech stack — and receive structured JSON records in return. B2BEnrich's extraction API covers 500M+ professional profiles and 50M+ companies.",
      },
      {
        question: "What data extraction services does B2BEnrich provide?",
        answer:
          "B2BEnrich provides data extraction services for both people and companies: extract contact profiles by job title, company, or location; extract company records by industry, revenue, employee count, or technology; extract employees at a specific company; and extract companies by name. All extraction endpoints return structured JSON and support pagination for large result sets.",
      },
      {
        question: "What are the most useful data extraction techniques for B2B?",
        answer:
          "The most effective B2B data extraction techniques are: (1) filter-based extraction using criteria like job title, industry, and tech stack to pull ICP-matched records; (2) company-first extraction — extract companies matching your target profile, then extract employees at each; (3) AI-powered search extraction using free-form text queries; and (4) enrichment-based extraction, where you feed a known identifier and extract the full surrounding dataset.",
      },
      {
        question: "How is data extraction different from data enrichment?",
        answer:
          "Data extraction involves querying a database to discover new records that match your criteria — you start with filters and get back a list of profiles or companies. Data enrichment starts with a record you already have (a partial lead, a form fill) and fills in missing fields. B2BEnrich supports both workflows: use extraction endpoints to build target lists, then use enrichment endpoints to fill gaps in records you already own.",
      },
    ],
  },
  {
    title: "Integration & Scale",
    questions: [
      {
        question: "Can I extract data in bulk?",
        answer:
          "Yes. All B2BEnrich search and extraction endpoints support paginated results. You can iterate through result pages to retrieve thousands of records programmatically. For extremely high-volume extraction needs, contact our sales team for custom rate limits and enterprise data packages.",
      },
      {
        question: "What file formats does the data extraction API support?",
        answer:
          "All B2BEnrich API responses return structured JSON. You can transform these into CSV, Parquet, or any other format in your own pipeline. Our API is designed for developer integration — connect it to your data warehouse, CRM, or automation platform using standard HTTP requests.",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// /products/people-enrichment
// ─────────────────────────────────────────────
export const peopleEnrichmentFAQ: Category[] = [
  {
    title: "Lead & Contact Enrichment",
    questions: [
      {
        question: "What is lead enrichment and why does it matter?",
        answer:
          "Lead enrichment is the process of appending verified professional data to a partial lead record. When someone fills out a form with just their email, lead enrichment fills in their full name, current job title, company, company size, location, and phone number — automatically. This lets your sales team prioritize and personalize outreach without manual research. B2BEnrich's lead enrichment API resolves these in real-time, 1 credit per call.",
      },
      {
        question: "How does the B2BEnrich lead enrichment API work?",
        answer:
          "Send a POST request to our people enrichment endpoint with a profile URL, email, or phone number. The API returns a complete professional profile including full name, current job title, job function, seniority level, company name, company domain, verified email, and phone numbers. The entire call takes under 500ms. Use the returned data to route leads, score them against your ICP, or populate CRM fields automatically.",
      },
      {
        question: "What is an email enrichment API?",
        answer:
          "An email enrichment API takes an email address as input and returns the associated professional profile. B2BEnrich's email enrichment resolves the email to a full contact record including name, job title, company, location, and additional verified contact data. It's commonly used to enrich marketing list sign-ups, CRM imports, and inbound leads before they reach sales.",
      },
      {
        question: "What is B2B contact enrichment and how is it different from lead enrichment?",
        answer:
          "B2B contact enrichment and lead enrichment refer to the same core process — adding verified professional data to a contact record. The distinction is context: lead enrichment typically describes enriching new inbound leads before they enter your CRM, while contact enrichment often describes enriching existing CRM contacts to keep their data fresh. B2BEnrich supports both workflows through the same API endpoints.",
      },
    ],
  },
  {
    title: "Data & Accuracy",
    questions: [
      {
        question: "What data does a people enrichment call return?",
        answer:
          "A B2BEnrich people enrichment call returns: full name, first name, last name, current job title, job function, job level, persona, company name, company domain, verified email address, phone numbers, city, state, country, and country region. For profile URL lookups, it also returns the canonical profile URL and internal person ID for future lookups by ID.",
      },
      {
        question: "How fresh is the enrichment data?",
        answer:
          "B2BEnrich continuously refreshes its database from publicly available professional data sources. Most records are updated within 30–90 days. Job changes, company updates, and email address changes are reflected promptly. For the most time-sensitive use cases — like validating a single email before sending — combine people enrichment with our email validation API to confirm deliverability in real-time.",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// /products/company-enrichment
// ─────────────────────────────────────────────
export const companyEnrichmentFAQ: Category[] = [
  {
    title: "Company Enrichment API",
    questions: [
      {
        question: "What is a company enrichment API?",
        answer:
          "A company enrichment API takes a company identifier — a domain or company URL — and returns comprehensive firmographic and technographic data about that company. B2BEnrich's company enrichment API returns the company name, industry, description, employee range, revenue range, entity type, legal type, HQ location, funding history, web analytics, and full technology stack. Cost: 1 credit per call.",
      },
      {
        question: "What is company data enrichment used for?",
        answer:
          "Company data enrichment is used to populate CRM account records, score leads against an ICP, enable account-based marketing targeting, identify technology stack for competitive displacement selling, and qualify inbound companies before routing to sales. Any time a company domain enters your system — via form fill, sign-up, or CRM import — enrichment gives your team a complete picture before the first touchpoint.",
      },
      {
        question: "What B2B company data does the enrichment API return?",
        answer:
          "B2BEnrich's company enrichment returns: company name and description, industry classification, entity type and legal type, SIC code, revenue range, employee range, HQ city/state/country, last funding date and amount, funding type, number of investors, total funding amount, organic and paid monthly web visits, and a full technology stack covering CRM, marketing automation, analytics, cloud, development, e-commerce, ERP, and security tools.",
      },
      {
        question: "How do I enrich a company using just its domain?",
        answer:
          "Send a POST request to `https://api.b2benrich.com/v1/enrich/companies/domain-to-company` with the domain in the `input` field and your API key in the `X-Api-Key` header. The response includes the full company profile in JSON. The same endpoint accepts company URLs. You can also look up a company by its internal ID once you have it, using our GET endpoint.",
      },
    ],
  },
  {
    title: "Integration",
    questions: [
      {
        question: "Can I enrich companies in bulk from a domain list?",
        answer:
          "Yes. Loop through your domain list and call the domain-to-company endpoint for each. Our API supports concurrent requests, so you can run parallel enrichment jobs to process large lists quickly. Each call costs 1 credit. For very large datasets or scheduled enrichment pipelines, contact our team about enterprise plans with higher rate limits.",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// /products/validation
// ─────────────────────────────────────────────
export const validationFAQ: Category[] = [
  {
    title: "Email Verification & Validation",
    questions: [
      {
        question: "What is an email verification API?",
        answer:
          "An email verification API checks whether an email address is real and deliverable before you send to it. B2BEnrich's email verification API performs SMTP-level checks (verifying the mailbox actually exists), MX record validation, format validation, and checks for disposable addresses, catch-all domains, and role-based emails. It returns a deliverability status, quality score, and risk flags — all in one call.",
      },
      {
        question: "What is the difference between email validation and email verification?",
        answer:
          "Email validation typically refers to checking format and syntax — confirming the email follows a valid pattern. Email verification goes deeper: it checks SMTP deliverability, MX records, whether the specific mailbox exists, and risk signals like disposable domains or breach history. B2BEnrich's validation API does both in a single call, returning both format validity and live SMTP verification results.",
      },
      {
        question: "What does the email validation API check?",
        answer:
          "B2BEnrich's email validation API checks: format validity, SMTP deliverability, MX record validity, whether the email is from a free provider, whether it's disposable, whether it's a catch-all address, whether it's a subaddress or role-based, DMARC and SPF enforcement, domain age, domain risk status, address risk status, and breach history including total breaches and dates. Cost: 1 credit per check.",
      },
      {
        question: "How does an email finder API work?",
        answer:
          "An email finder API takes a person's name and company domain and returns their most likely verified business email address. B2BEnrich's email finder endpoint (`/v1/enrich/person/name-domain-to-email`) accepts `first_name`, `last_name`, and `domain` and returns the verified email address. It's the fastest way to turn a contact name and company into an outreach-ready email address.",
      },
    ],
  },
  {
    title: "Phone Validation",
    questions: [
      {
        question: "Does B2BEnrich validate phone numbers too?",
        answer:
          "Yes. B2BEnrich's phone validation API checks carrier, line type (mobile, landline, VoIP), validation status, location, registration data, risk level, and breach history for any phone number. Pass a phone number in E.164 format and an optional country code. The API returns a full intelligence payload covering whether the number is valid, active, VoIP, disposable, or associated with known abuse. Cost: 1 credit per check.",
      },
      {
        question: "Can I use the email checker API in my sign-up flow?",
        answer:
          "Yes, and it's one of the most common use cases. Call our email checker API on every new sign-up to instantly detect disposable addresses, role emails (like info@ or noreply@), and invalid addresses before they pollute your CRM. The API responds in milliseconds, making it suitable for real-time form validation. Use the `is_disposable`, `is_role`, and `status` fields to decide whether to accept the sign-up.",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// /products/people-search
// ─────────────────────────────────────────────
export const peopleSearchFAQ: Category[] = [
  {
    title: "B2B Contact Database",
    questions: [
      {
        question: "What is a B2B contact database?",
        answer:
          "A B2B contact database is a structured collection of professional profiles including names, job titles, company affiliations, email addresses, and location data. B2BEnrich's B2B contact database contains 550M+ verified professional profiles, searchable via API by job title, company, seniority, industry, location, and more. It's the foundation for outbound sales, account-based marketing, and lead generation.",
      },
      {
        question: "How do I find contacts in a B2B contact database by job title?",
        answer:
          "Use B2BEnrich's people search API (`/v1/search/people`) with a `job_title` filter. Combine it with `company_employees_range`, `country_code`, and other filters to narrow results to your ICP. The endpoint returns paginated contact profiles with verified emails where available. You can also search for employees at a specific company using the search employees endpoint.",
      },
      {
        question: "What is a B2B contact database provider?",
        answer:
          "A B2B contact database provider is a company that maintains a large database of professional contact records and makes them available via API or export. The best B2B contact database providers offer high coverage (500M+ profiles), fresh data (updated continuously), verified emails, GDPR compliance, and flexible API access. B2BEnrich is an API-first B2B contact database provider with credit-based pricing — you pay only for the contacts you actually retrieve.",
      },
      {
        question: "How do I find a contact's phone number or email?",
        answer:
          "Use B2BEnrich's people enrichment API with the person's profile URL or known email to retrieve their full contact record including email address and phone numbers. Alternatively, use the name-domain-to-email endpoint with their first name, last name, and company domain to look up a verified business email directly. Phone numbers are returned as part of the full profile enrichment response.",
      },
    ],
  },
  {
    title: "Search & Filters",
    questions: [
      {
        question: "What filters are available in the B2B contact database search?",
        answer:
          "B2BEnrich's people search supports filtering by: job title, job function, job level (C-suite, VP, Director, Manager, etc.), persona, company name, company domain, company employee range, industry, city, state, and country. You can combine multiple filters in a single query and paginate through results. Use our field meta endpoints to browse all valid values for each filter before building your search.",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// /products/company-search
// ─────────────────────────────────────────────
export const companySearchFAQ: Category[] = [
  {
    title: "Company Search & Database",
    questions: [
      {
        question: "What is a B2B company database?",
        answer:
          "A B2B company database is a structured collection of firmographic records covering company name, domain, industry, employee count, revenue range, location, technology stack, and funding data. B2BEnrich's B2B company database contains 50M+ companies worldwide, all searchable via API. It's used to build target account lists, qualify inbound companies, and enrich CRM account records.",
      },
      {
        question: "What is a professional data API?",
        answer:
          "A professional data API provides programmatic access to business contact and company data. Unlike bulk data exports, a professional data API lets you query the database in real time with precise filters and retrieve only the records you need — without managing large data files. B2BEnrich's professional data API covers both people and company data with 30+ search filters and returns structured JSON.",
      },
      {
        question: "What filters does the company search API support?",
        answer:
          "B2BEnrich's company search API supports filtering by: industry, employee range, revenue range, HQ city, HQ state, HQ country, entity type, legal type, CRM technologies, marketing automation technologies, analytics technologies, cloud provider, development technologies, e-commerce technologies, ERP technologies, and more. Use our field meta endpoints to browse all valid filter values before querying.",
      },
      {
        question: "How can I use company database software to build target account lists?",
        answer:
          "Define your Ideal Customer Profile attributes — industry, company size, revenue range, geography, and technology stack. Then query B2BEnrich's company search API with those attributes as filters. The API returns matching companies with their full firmographic profile. From there, use the prospector or people search API to find decision-makers at each matched account.",
      },
    ],
  },
  {
    title: "Integration",
    questions: [
      {
        question: "Can I search companies by the technology they use?",
        answer:
          "Yes. B2BEnrich's company search API supports filtering by 15+ technology categories: CRM, marketing automation, ABM, sales automation, analytics, CMS, cloud provider, email hosting, email security, application security, cloud security, development tools, e-commerce, and ERP. For example, you can retrieve all US-based companies with 50–200 employees that use Salesforce as their CRM.",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// /products/prospector
// ─────────────────────────────────────────────
export const prospectorFAQ: Category[] = [
  {
    title: "B2B Data Providers & Prospecting",
    questions: [
      {
        question: "What makes a good B2B data provider?",
        answer:
          "The best B2B data providers combine database size, data freshness, coverage accuracy, compliance, and flexible API access. B2BEnrich covers 550M+ contacts and 50M+ companies, refreshes data continuously, provides GDPR-compliant records, and offers a developer-first API with credit-based pricing — no seat fees. As one of the top B2B data providers, we support people enrichment, company enrichment, email validation, and advanced prospecting in a single platform.",
      },
      {
        question: "What is the B2BEnrich Prospector API?",
        answer:
          "The B2BEnrich Prospector API is an advanced search endpoint that lets you query the full 550M+ person and 50M+ company database with 30+ simultaneous filters. Filter by job title, company name, industry, employee range, revenue range, location, technology stack, and more. The API returns matching contact records with verified emails and company data. Cost: 5 credits per search call.",
      },
      {
        question: "What is the difference between B2B data providers and data vendors?",
        answer:
          "B2B data providers and data vendors both refer to companies that supply business contact and company data. The distinction is often in delivery model: traditional data vendors sell static lists or annual database licenses, while modern B2B data providers like B2BEnrich offer real-time API access to continuously updated data. API-first providers are preferred by product teams and growth engineers who need data integrated into live workflows rather than one-time exports.",
      },
      {
        question: "How do I access a B2B database via API?",
        answer:
          "Sign up for a B2BEnrich account at app.b2benrich.com to receive your API key. Then call any of our search or enrichment endpoints with your key in the `X-Api-Key` header. The prospector search endpoint (`/v1/prospector/search`) gives you the broadest access to the full B2B database with 30+ filters. Start with our documentation at docs.b2benrich.com for code examples in curl, JavaScript, Python, and more.",
      },
    ],
  },
  {
    title: "Data Quality",
    questions: [
      {
        question: "How accurate is B2BEnrich's B2B data?",
        answer:
          "B2BEnrich sources data from publicly available professional sources and continuously refreshes records. Email addresses are verified for deliverability before being returned. Company records are cross-referenced across multiple sources for accuracy. Our data is used by sales and marketing teams to power outbound campaigns — accuracy is core to the product, not an afterthought.",
      },
      {
        question: "Does B2BEnrich offer international B2B data?",
        answer:
          "Yes. B2BEnrich covers contacts and companies across all major geographies. You can filter by country code and country name in both people search and company search. Our database has strong coverage in North America, Western Europe, APAC, and Latin America. Use the country code meta endpoint to browse all supported countries before building geography-specific queries.",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// /solutions/b2b-database
// ─────────────────────────────────────────────
export const b2bDatabaseFAQ: Category[] = [
  {
    title: "B2B Database & Data Providers",
    questions: [
      {
        question: "What is a B2B database and what does it contain?",
        answer:
          "A B2B database is a structured repository of business contact and company records used for sales prospecting, marketing targeting, and CRM enrichment. B2BEnrich's B2B database contains 550M+ professional contacts (with job titles, emails, and company affiliations) and 50M+ company records (with firmographics, technology stack, funding, and location data). The entire database is accessible in real-time via REST API.",
      },
      {
        question: "How does B2BEnrich compare to other B2B data providers?",
        answer:
          "B2BEnrich is an API-first B2B data provider, meaning you access data programmatically via REST API rather than through CSV exports or seat-based tools. Unlike traditional data vendors that sell static lists, B2BEnrich delivers real-time enrichment and search with per-call credit pricing. There are no seat licenses, no annual commitments, and no minimum volumes. The same platform covers contact enrichment, company enrichment, email validation, and advanced prospecting.",
      },
      {
        question: "Is B2BEnrich a GDPR-compliant B2B contact database?",
        answer:
          "Yes. B2BEnrich only indexes publicly available professional data and operates in compliance with GDPR, CCPA, and other applicable data privacy regulations. We provide data subject request handling and only return professional contact information. Our B2B contact database is designed for legitimate business use cases — sales outreach, CRM enrichment, and market research.",
      },
      {
        question: "Can I buy B2B data or do I need to use the API?",
        answer:
          "B2BEnrich is designed as an API-first platform — you query the B2B database in real time rather than purchasing a static list. This gives you fresher data, more precise targeting, and no waste on records outside your ICP. Each API call costs 1 credit for enrichment or 5 credits for prospector search. For large-scale data needs, contact our sales team about enterprise data packages.",
      },
    ],
  },
  {
    title: "B2B Email Database",
    questions: [
      {
        question: "How do I build a verified B2B email database?",
        answer:
          "Use B2BEnrich's people search API to find contacts matching your ICP criteria, then enrich each result to retrieve their verified email address. Alternatively, use the name-domain-to-email endpoint to find emails for a list of contacts you already have. All returned emails are verified for deliverability. Combine with our email validation API to confirm deliverability before adding to your outreach list.",
      },
      {
        question: "What is the difference between a B2B contact database and a B2B email database?",
        answer:
          "A B2B contact database contains full professional profiles — name, job title, company, location, phone, and email. A B2B email database is a subset focused on email addresses. B2BEnrich provides both: full contact profiles via people enrichment, and targeted email lookup via the name-domain-to-email endpoint. For outbound campaigns, we recommend using full contact profiles so you can personalize outreach beyond just the email address.",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// /solutions/crm-data-enrichment
// ─────────────────────────────────────────────
export const crmEnrichmentFAQ: Category[] = [
  {
    title: "CRM Data Enrichment",
    questions: [
      {
        question: "What is CRM data enrichment?",
        answer:
          "CRM data enrichment is the automated process of appending verified, up-to-date data to your CRM contact and account records. It addresses data decay — the natural degradation of CRM data as people change jobs, companies change sizes, and emails go stale. A CRM enrichment API like B2BEnrich connects to your CRM and keeps every record complete: current job title, verified email, company firmographics, and tech stack.",
      },
      {
        question: "How does HubSpot data enrichment work with B2BEnrich?",
        answer:
          "B2BEnrich enriches HubSpot contacts and companies via REST API. On new contact creation, trigger a call to our people enrichment endpoint with the contact's email or profile URL. The response returns current job title, company, location, and phone — push these back into HubSpot contact properties. For account records, call our company enrichment endpoint with the domain to populate company size, industry, revenue, and tech stack fields.",
      },
      {
        question: "Does B2BEnrich support Clay data enrichment?",
        answer:
          "Yes. Clay users can call B2BEnrich's API directly from Clay's HTTP request action to enrich contacts and companies with our data. Use the people enrichment endpoint for contact enrichment and the domain-to-company endpoint for account enrichment. B2BEnrich's credit-based pricing means you only pay for enrichment calls that successfully return data.",
      },
      {
        question: "How do I enrich CRM data at scale?",
        answer:
          "For bulk CRM data enrichment, export your contacts or accounts to a list of identifiers (emails or domains), run them through B2BEnrich's enrichment endpoints in batches, and push the enriched fields back into your CRM. For ongoing enrichment, set up a webhook or scheduled job that triggers an enrichment call whenever a new record is created. B2BEnrich's API supports concurrent requests for high-throughput pipelines.",
      },
    ],
  },
  {
    title: "Data Integration",
    questions: [
      {
        question: "What is B2B data integration?",
        answer:
          "B2B data integration is the process of connecting external data sources — like enrichment APIs, intent data providers, and data vendors — into your internal systems (CRM, data warehouse, marketing automation). B2BEnrich acts as a data integration layer: a single API that delivers people data, company data, and validation signals to any system that can make HTTP requests.",
      },
      {
        question: "Can B2BEnrich integrate with data automation software?",
        answer:
          "Yes. B2BEnrich's REST API works with any data automation software or workflow tool that supports HTTP requests, including Zapier, Make (formerly Integromat), n8n, Clay, Retool, and custom-built pipelines. Set up automated enrichment flows that trigger on new leads, scheduled re-enrichment jobs, or event-driven data appending workflows.",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// /solutions/b2b-technographic-data
// ─────────────────────────────────────────────
export const technographicDataFAQ: Category[] = [
  {
    title: "B2B Technographic Data",
    questions: [
      {
        question: "What is B2B technographic data?",
        answer:
          "B2B technographic data refers to information about the technology products and platforms a company uses — their CRM, marketing automation, cloud provider, analytics tools, e-commerce platform, and more. Technographic data is used in B2B sales and marketing to identify target accounts using specific tools (e.g., 'find all companies using Salesforce with 50–500 employees') and to personalize outreach based on a prospect's existing tech stack.",
      },
      {
        question: "What technology categories does B2BEnrich cover?",
        answer:
          "B2BEnrich covers 15+ technology categories per company: CRM, marketing automation, ABM, sales automation, analytics, CMS, MarTech, conversation intelligence, cloud provider, email hosting, email security, application security, cloud security, development technologies, e-commerce, and ERP. Each category may contain multiple tool values — for example, a company might use both HubSpot and Segment in the analytics category.",
      },
      {
        question: "How can I use technographic data for B2B prospecting?",
        answer:
          "Use B2BEnrich's company search API to filter companies by their technology stack. For example, find all US-based SaaS companies with 50–200 employees that use Salesforce as their CRM — these are ideal targets for a Salesforce-integrated product. Combine technographic filters with firmographic criteria (industry, revenue, employee count) for highly precise ICP matching. Each returned company includes the full tech stack for further analysis.",
      },
      {
        question: "What is a B2B data platform?",
        answer:
          "A B2B data platform is a centralized system that aggregates, enriches, and distributes business contact and company data across your go-to-market tools. B2BEnrich functions as a B2B data platform by providing a single API that covers people enrichment, company enrichment (including technographics), email validation, people search, company search, and AI-powered prospecting — so teams don't need to stitch together multiple data vendors.",
      },
    ],
  },
  {
    title: "Data Sources & Freshness",
    questions: [
      {
        question: "What are the best B2B data sources for technographic information?",
        answer:
          "The best B2B data sources for technographic data combine web crawling (detecting tools via page source, cookies, and DNS records), partner data networks, and user-reported signals. B2BEnrich aggregates technographic data from multiple sources and continuously refreshes it. You get technology stack data as part of every company enrichment response, alongside firmographics, funding, and web analytics.",
      },
      {
        question: "What are B2B data appending services?",
        answer:
          "B2B data appending services add missing data fields to your existing records. Common appends include: adding email addresses to a list of names and companies, adding company firmographics to a list of domains, adding technographic data to your CRM accounts, or adding phone numbers to a contact list. B2BEnrich's enrichment APIs perform all of these appends in real time via API — one endpoint per append type, 1 credit per call.",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// /resources/what-is-data-enrichment
// ─────────────────────────────────────────────
export const resourcesDataEnrichmentFAQ: Category[] = [
  {
    title: "Understanding Data Enrichment",
    questions: [
      {
        question: "What is data enrichment in simple terms?",
        answer:
          "Data enrichment means taking incomplete data you already have — like a name, email, or company domain — and adding more information to it from an external source. For example: you have a sign-up email, data enrichment turns it into a complete contact record with job title, company size, industry, and phone number. The goal is to make your data more useful for sales, marketing, and product decisions.",
      },
      {
        question: "What are the best data enrichment practices for B2B teams?",
        answer:
          "Data enrichment best practices for B2B teams include: (1) enrich at the point of entry so data is complete before it reaches sales; (2) re-enrich existing records on a 90-day cycle to counter data decay; (3) validate emails separately after enrichment to confirm deliverability; (4) store enriched fields alongside original fields so you can refresh cleanly; and (5) use enriched firmographic data to score leads against your ICP before routing.",
      },
      {
        question: "What are some real-world data enrichment examples?",
        answer:
          "Common data enrichment examples include: a SaaS company enriching every sign-up email to detect company size and route enterprise leads to sales; a marketing team enriching inbound form fills to personalize nurture content by industry; a sales ops team bulk-enriching their CRM to fix stale job titles and emails; and a product team enriching user accounts in the background to personalize onboarding flows without asking users to fill out a long form.",
      },
      {
        question: "How does data enrichment help with ICP definition?",
        answer:
          "Enriching your closed-won customer accounts with firmographic and technographic data reveals the patterns that make up your Ideal Customer Profile. By enriching 50–100 of your best customers — appending industry, employee count, revenue range, and tech stack — you can identify which attributes correlate with successful outcomes. These enriched attributes become your ICP criteria, which you then use as filters in your prospecting to find lookalike accounts.",
      },
    ],
  },
  {
    title: "Data Enrichment Services & Tools",
    questions: [
      {
        question: "What should I look for in a data enrichment service?",
        answer:
          "When evaluating data enrichment services, look for: coverage depth (how many contacts and companies are in the database), data freshness (how often records are updated), email accuracy (do they verify deliverability), API quality (response time, uptime, documentation), pricing model (per-call credits vs. seat licenses), and compliance (GDPR, CCPA). B2BEnrich covers all six: 550M+ contacts, continuous refreshes, SMTP email verification, a developer-first API, credit pricing, and GDPR compliance.",
      },
      {
        question: "What are data enrichment techniques for large-scale B2B operations?",
        answer:
          "At scale, the most effective data enrichment techniques are: real-time enrichment triggered by system events (new lead, new sign-up, new CRM import); scheduled bulk re-enrichment to refresh the full database periodically; waterfall enrichment that tries multiple identifiers in order of reliability; and event-driven enrichment via webhooks that keeps data current as prospects progress through your pipeline.",
      },
    ],
  },
];
