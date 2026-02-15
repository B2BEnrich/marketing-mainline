Data Enrichment API | B2B Data API for Product Builders | Captain Data | Captain Data

[Skip to main content](#main-content)

B2B DATA API

# Data enrichment API  
for product builders

Enhance your application data with rich profile information, company insights, and verified contact data. Reliable, high-quality B2B people & company data at scale through a simple RESTful API.

*   Real-time data enrichment from 500M+ profiles
*   99% uptime, <500ms average response time
*   Complete company firmographics and org charts
*   Ship in hours, not weeks

[Start Free Trial](https://app.captaindata.com)[See API Docs](https://docs.captaindata.com)

![Data Enrichment](https://cdn.sanity.io/images/bgfo6t8b/production/c1164820c61f3d7de9ec53e61517afc0940958e1-2160x1680.png)

500M+

Profiles

95%+

Accuracy

Trusted by leading SaaS & AI product companies

![Attention](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/assets/logos/attention-white.svg?dpl=dpl_NxqAkU22ZH459QUo3sWEmR8T9yTY)

![Cargo](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/assets/logos/cargo-full.svg?dpl=dpl_NxqAkU22ZH459QUo3sWEmR8T9yTY)

![lemlist](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/assets/logos/lemlist-white.svg?dpl=dpl_NxqAkU22ZH459QUo3sWEmR8T9yTY)

![AiSDR](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/assets/logos/aisdr-white.svg?dpl=dpl_NxqAkU22ZH459QUo3sWEmR8T9yTY)

![Scalestack](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/assets/logos/scalestack-white.svg?dpl=dpl_NxqAkU22ZH459QUo3sWEmR8T9yTY)

![ZELIQ](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/assets/logos/zeliq-white.svg?dpl=dpl_NxqAkU22ZH459QUo3sWEmR8T9yTY)

![Rippling](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/assets/logos/rippling-white.svg?dpl=dpl_NxqAkU22ZH459QUo3sWEmR8T9yTY)

## Enrich profiles with comprehensive data andreal-time information

Real-time data enrichment API that goes beyond basic demographics. Enhance your application data with work history, skills, company details, and always-fresh profile information.

javascript

```
// Enrich a person profile
const response = await fetch(
  'https://api.captaindata.com/v1/people/enrich?li_profile_url=' + 
  encodeURIComponent('https://linkedin.com/in/johndoe'),
  {
    method: 'GET',
    headers: {
      'X-API-Key': 'YOUR_API_KEY'
    }
  }
);

const data = await response.json();
// Returns: full_name, email, job_title, company, skills, etc.
```

People Enrichment API

### Enrich people profiles withcomprehensive professional data

Get full profile data from any LinkedIn URL. Returns verified emails, work history, skills, education, and company information. Perfect for enriching user profiles, building contact databases, or powering AI agents.

*   Verified email addresses with deliverability checks
*   Complete work history and current role
*   Skills, certifications, and education
*   Company information and firmographics

[View People Enrichment API](/people-enrichment)

python

```
# Enrich a company profile
import requests

response = requests.get(
    'https://api.captaindata.com/v1/companies/enrich',
    params={'li_company_url': 'https://linkedin.com/company/acme'},
    headers={'X-API-Key': 'YOUR_API_KEY'}
)

data = response.json()
# Returns: company size, industry, funding, employees, etc.
```

Company Enrichment API

### Enrich company profiles withdetailed firmographic data

Get comprehensive company information from LinkedIn company pages. Returns company size, industry, funding, headquarters, and key decision-makers. Ideal for account-based marketing, sales intelligence, and market research.

*   Company size, industry, and location
*   Funding information and growth stage
*   Technology stack and tools used
*   Key employees and decision-makers

[View Company Enrichment API](/company-enrichment)

curl

```
# Find a person by name and company
curl -X GET \
  "https://api.captaindata.com/v1/people/find?full_name=John%20Doe&company_name=ACME%20Corp" \
  -H "X-API-Key: YOUR_API_KEY"
```

Find People API

### Find specific people byname and company

Quickly locate people in our database by name and optional company. Returns LinkedIn profile URL and unique identifier. Perfect for lead qualification, contact verification, and building prospect lists.

*   Search by full name and company
*   Returns LinkedIn profile URL
*   Fast lookup with high accuracy
*   Perfect for lead qualification workflows

[View Find People API](/find-people)

## Related API Endpoints

Explore additional endpoints to power your product features

### People APIs

Enrich and find people profiles with verified contact data.

Enrich People

Get full profile from LinkedIn URL

1 credit

Find People

Find person by name + company

2 credits

[Explore People APIs](/products#people-enrich)

### Company APIs

Get comprehensive company data including firmographics.

Enrich Company

Full company profile from LinkedIn

1 credit

Find Company

Find company by name or domain

2 credits

[Explore Company APIs](/products#company-enrich)

Power Your Product

## Ready to power your SaaS withreliable B2B data?

Start enriching your application data today with real-time B2B data. Get 100 free credits to test the API integration.

[Get API Key](https://app.captaindata.com)[View Documentation](https://docs.captaindata.com)

Your Data Extraction Questions

## Need some clarification ?

We are at your disposal to answer any questions you might have about the product.

What is data enrichment?

How does Captain Data enrich profiles?

What data points can I enrich?

How accurate is the enriched data?

How do I integrate data enrichment into my applications?

How does the pricing work for data enrichment?