Data Extraction API | B2B Data API for Product Builders | Captain Data | Captain Data

[Skip to main content](#main-content)

B2B DATA API

# Extract B2B people and company data with our  
data extraction API

Build your product features with reliable B2B data extraction. Query 500M+ professional profiles and 50M+ companies through our simple RESTful API. Real-time data, always fresh.

*   Query 500M+ professional profiles via API
*   Filter by job title, company, location, and more
*   Access 50M+ companies with firmographics
*   99% uptime, <500ms average response time

[Start Free Trial](https://app.captaindata.com)[See API Docs](https://docs.captaindata.com)

![Data Extraction](https://cdn.sanity.io/images/bgfo6t8b/production/6b24c58e10e987c371e4b84c0ea4b6305687ee39-2160x1840.png)

90%+

Coverage

50M+

Companies

Trusted by leading SaaS & AI product companies

![Attention](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/assets/logos/attention-white.svg?dpl=dpl_NxqAkU22ZH459QUo3sWEmR8T9yTY)

![Cargo](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/assets/logos/cargo-full.svg?dpl=dpl_NxqAkU22ZH459QUo3sWEmR8T9yTY)

![lemlist](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/assets/logos/lemlist-white.svg?dpl=dpl_NxqAkU22ZH459QUo3sWEmR8T9yTY)

![AiSDR](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/assets/logos/aisdr-white.svg?dpl=dpl_NxqAkU22ZH459QUo3sWEmR8T9yTY)

![Scalestack](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/assets/logos/scalestack-white.svg?dpl=dpl_NxqAkU22ZH459QUo3sWEmR8T9yTY)

![ZELIQ](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/assets/logos/zeliq-white.svg?dpl=dpl_NxqAkU22ZH459QUo3sWEmR8T9yTY)

![Rippling](chrome-extension://fgpepdeaaldghnmehdmckfibbhcjoljj/assets/logos/rippling-white.svg?dpl=dpl_NxqAkU22ZH459QUo3sWEmR8T9yTY)

## Extract B2B data at scale topower your product features

Query people and company data through our RESTful API. Filter by job title, industry, location, company size, and more. Get real-time results to build your product features faster.

javascript

```
// Search for people using Sales Navigator query
const query = '(keywords:"Software Engineer")';
const response = await fetch(
  `https://api.captaindata.com/v1/people/search?query=${encodeURIComponent(query)}&page_size=25`,
  {
    method: 'GET',
    headers: {
      'X-API-Key': 'YOUR_API_KEY'
    }
  }
);

const results = await response.json();
// Returns: array of matching profiles
```

Comprehensive Company & People Data

### Extract company and people data in real-time topower your product features

Query comprehensive company and people data through our API. Get company firmographics, employee lists, insights, funding information, and professional profiles.

*   Company technology stack insights
*   Hiring trends and growth indicators
*   Funding announcements and news
*   Company size and industry data

[Learn More](/products)

python

```
# Search companies using Sales Navigator query
import requests

response = requests.get(
    'https://api.captaindata.com/v1/companies/search',
    params={
        'query': '(keywords:"fintech")',
        'page_size': 25
    },
    headers={'X-API-Key': 'YOUR_API_KEY'}
)

companies = response.json()
# Returns: matching companies with firmographics
```

Simple API Integration

### Power your product withreal-time B2B data

Extract data with our straightforward RESTful API. No complex setup or maintenance required. Call our endpoints directly from your applications to get the data you need. Ship in hours, not weeks.

*   RESTful API for easy integration
*   Automatic data validation
*   Consistent response format
*   Comprehensive API documentation

[Get Started](https://app.captaindata.com)

curl

```
# Get employees of a company
curl -X GET \
  "https://api.captaindata.com/v1/companies/comp_123/employees?page_size=10" \
  -H "X-API-Key: YOUR_API_KEY"
```

Scale With Your Product

### Scale your data extraction asyour product grows

Extract large volumes of data with no limits. Whether you need 100 profiles or 100,000, Captain Data scales with your product needs through our reliable API infrastructure with 99% uptime.

*   Unlimited extraction volume
*   Fast API response times
*   Enterprise-grade reliability
*   Dedicated support for large accounts

[See Pricing](/pricing)

## Related API Endpoints

Explore additional endpoints to power your product features

### Discovery APIs

Search and discover people and companies at scale.

People Search

Sales Navigator compatible search

1 + 0.2/result

Company Search

Sales Navigator compatible search

1 + 0.2/result

Find Employees

List all employees at a company

1 + 0.2/result

[Explore Discovery APIs](/products#people-search)

Power Your Product

## Ready to power your SaaS withreliable B2B data?

Start extracting B2B data today through our simple RESTful API. Get 100 free credits to test the integration and ship your features faster.

[Get API Key](https://app.captaindata.com)[View Documentation](https://docs.captaindata.com)

Your Data Extraction Questions

## Need some clarification ?

We are at your disposal to answer any questions you might have about the product.

What is data extraction?

What sources can Captain Data extract from?

How do I query data with the extraction API?

Can I extract employee lists from companies?

Is data extraction GDPR compliant?

What's the difference between extraction and enrichment?