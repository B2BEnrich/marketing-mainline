import { 
  Users, 
  Building2, 
  CheckCircle, 
  Search, 
  Database, 
  Sparkles, 
  Download,
  RefreshCw,
  Cpu,
} from "lucide-react";

export const PRODUCT_LINKS = [
  {
    title: "People Enrichment",
    href: "/products/people-enrichment",
    description: "Enrich person data with 30+ data points from LinkedIn",
    icon: <Users className="size-5" />,
  },
  {
    title: "Company Enrichment",
    href: "/products/company-enrichment",
    description: "Get firmographic data for any company domain",
    icon: <Building2 className="size-5" />,
  },
  {
    title: "Validation",
    href: "/products/validation",
    description: "Verify email addresses and phone numbers in real-time",
    icon: <CheckCircle className="size-5" />,
  },
  {
    title: "People Search",
    href: "/products/people-search",
    description: "Find specific people by company and role",
    icon: <Search className="size-5" />,
  },
  {
    title: "Company Search",
    href: "/products/company-search",
    description: "Find companies by industry, location, and size",
    icon: <Search className="size-5" />,
  },
  {
    title: "Prospector",
    href: "/products/prospector",
    description: "Search across 500M+ profiles with granular filters",
    icon: <Database className="size-5" />,
  },
];

export const SOLUTION_LINKS = [
  {
    title: "Data Enrichment",
    href: "/solutions/data-enrichment",
    description: "Keep your CRM and user data fresh and complete",
    icon: <Sparkles className="size-5" />,
  },
  {
    title: "Data Extraction",
    href: "/solutions/data-extraction",
    description: "Extract B2B people and company data at scale via API",
    icon: <Download className="size-5" />,
  },
  {
    title: "B2B Database",
    href: "/solutions/b2b-database",
    description: "Access 550M+ contacts and 50M+ companies via API",
    icon: <Database className="size-5" />,
  },
  {
    title: "CRM Data Enrichment",
    href: "/solutions/crm-data-enrichment",
    description: "Enrich HubSpot, Salesforce, and Clay records automatically",
    icon: <RefreshCw className="size-5" />,
  },
  {
    title: "Technographic Data",
    href: "/solutions/b2b-technographic-data",
    description: "Discover what technology every company uses",
    icon: <Cpu className="size-5" />,
  },
];
