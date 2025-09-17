import React from 'react';
import {
  MessageSquare,
  Database,
  BarChart3,
  Mail,
  FileText,
  Users,
  Shield,
  Calendar,
  Phone,
  Server,
  Workflow,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { Integration } from '@/types/integrations';

// SOLID Principle: Single Responsibility - Integration data configuration
// DRY Principle: Centralized integration data for reusability

export const coreIntegrations: Integration[] = [
  {
    id: 'jira',
    name: 'JIRA',
    description: 'Primary workflow management and issue tracking platform',
    category: 'core',
    logo: React.createElement(Workflow, { className: "w-full h-full" }),
    status: 'available',
    featured: true,
    capabilities: ['Issue Management', 'Workflow Automation', 'Custom Fields', 'Reporting']
  },
  {
    id: 'confluence',
    name: 'Confluence',
    description: 'Documentation and knowledge management integration',
    category: 'core',
    logo: React.createElement(FileText, { className: "w-full h-full" }),
    status: 'available',
    featured: true,
    capabilities: ['Documentation', 'Knowledge Base', 'Templates', 'Collaboration']
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Real-time team communication and notifications',
    category: 'communication',
    logo: React.createElement(MessageSquare, { className: "w-full h-full" }),
    status: 'available',
    featured: true,
    capabilities: ['Instant Notifications', 'Bot Commands', 'Channel Updates', 'File Sharing']
  }
];

export const childWelfareIntegrations: Integration[] = [
  {
    id: 'sacwis',
    name: 'SACWIS',
    description: 'State Automated Child Welfare Information System',
    category: 'child-welfare',
    logo: React.createElement(Database, { className: "w-full h-full" }),
    status: 'available',
    capabilities: ['Case Management', 'State Reporting', 'Compliance Tracking', 'Data Exchange']
  },
  {
    id: 'ccwis',
    name: 'CCWIS',
    description: 'Comprehensive Child Welfare Information System',
    category: 'child-welfare',
    logo: React.createElement(Shield, { className: "w-full h-full" }),
    status: 'coming-soon',
    capabilities: ['Federal Reporting', 'Case Planning', 'Safety Assessment', 'Provider Management']
  },
  {
    id: 'ncands',
    name: 'NCANDS',
    description: 'National Child Abuse and Neglect Data System',
    category: 'child-welfare',
    logo: React.createElement(AlertTriangle, { className: "w-full h-full" }),
    status: 'coming-soon',
    capabilities: ['Federal Reporting', 'Statistical Analysis', 'Trend Tracking', 'Policy Research']
  },
  {
    id: 'afcars',
    name: 'AFCARS',
    description: 'Adoption and Foster Care Analysis and Reporting System',
    category: 'child-welfare',
    logo: React.createElement(Users, { className: "w-full h-full" }),
    status: 'beta',
    capabilities: ['Foster Care Data', 'Adoption Records', 'Federal Compliance', 'Outcome Tracking']
  }
];

export const analyticsIntegrations: Integration[] = [
  {
    id: 'tableau',
    name: 'Tableau',
    description: 'Advanced data visualization and business intelligence',
    category: 'analytics',
    logo: React.createElement(BarChart3, { className: "w-full h-full" }),
    status: 'available',
    capabilities: ['Interactive Dashboards', 'Data Visualization', 'Trend Analysis', 'Custom Reports']
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    description: 'Microsoft business analytics and reporting platform',
    category: 'analytics',
    logo: React.createElement(BarChart3, { className: "w-full h-full" }),
    status: 'available',
    capabilities: ['Real-time Analytics', 'Custom Dashboards', 'Data Modeling', 'Report Sharing']
  },
  {
    id: 'excel',
    name: 'Excel',
    description: 'Automated report generation and data export',
    category: 'analytics',
    logo: React.createElement(FileText, { className: "w-full h-full" }),
    status: 'available',
    capabilities: ['Report Export', 'Data Analysis', 'Chart Generation', 'Template Automation']
  }
];

export const communicationIntegrations: Integration[] = [
  {
    id: 'teams',
    name: 'Microsoft Teams',
    description: 'Enterprise communication and collaboration platform',
    category: 'communication',
    logo: React.createElement(Users, { className: "w-full h-full" }),
    status: 'available',
    capabilities: ['Video Conferencing', 'File Collaboration', 'Chat Integration', 'Calendar Sync']
  },
  {
    id: 'outlook',
    name: 'Outlook',
    description: 'Email notifications and calendar integration',
    category: 'communication',
    logo: React.createElement(Mail, { className: "w-full h-full" }),
    status: 'available',
    capabilities: ['Email Alerts', 'Calendar Events', 'Meeting Scheduling', 'Task Reminders']
  },
  {
    id: 'phone-system',
    name: 'Phone Systems',
    description: 'Integration with VoIP and traditional phone systems',
    category: 'communication',
    logo: React.createElement(Phone, { className: "w-full h-full" }),
    status: 'coming-soon',
    capabilities: ['Call Logging', 'Automatic Dialing', 'Call Recording', 'Contact Management']
  }
];

export const workflowIntegrations: Integration[] = [
  {
    id: 'calendar',
    name: 'Calendar Systems',
    description: 'Google Calendar, Outlook Calendar integration',
    category: 'workflow',
    logo: React.createElement(Calendar, { className: "w-full h-full" }),
    status: 'available',
    capabilities: ['Court Dates', 'Appointment Scheduling', 'Deadline Tracking', 'Reminder Alerts']
  },
  {
    id: 'document-mgmt',
    name: 'Document Management',
    description: 'SharePoint, Google Drive, and other storage systems',
    category: 'workflow',
    logo: React.createElement(Server, { className: "w-full h-full" }),
    status: 'available',
    capabilities: ['File Storage', 'Version Control', 'Access Management', 'Audit Trails']
  },
  {
    id: 'time-tracking',
    name: 'Time Tracking',
    description: 'Automated time logging for case work and reporting',
    category: 'workflow',
    logo: React.createElement(Clock, { className: "w-full h-full" }),
    status: 'beta',
    capabilities: ['Automatic Logging', 'Billable Hours', 'Activity Tracking', 'Productivity Reports']
  }
];

export const securityIntegrations: Integration[] = [
  {
    id: 'sso',
    name: 'Single Sign-On',
    description: 'Active Directory, SAML, OAuth integration',
    category: 'security',
    logo: React.createElement(Shield, { className: "w-full h-full" }),
    status: 'available',
    featured: true,
    capabilities: ['User Authentication', 'Role Management', 'Access Control', 'Audit Logging']
  },
  {
    id: 'compliance',
    name: 'Compliance Tools',
    description: 'HIPAA, FERPA, and state compliance monitoring',
    category: 'security',
    logo: React.createElement(CheckCircle, { className: "w-full h-full" }),
    status: 'available',
    capabilities: ['Privacy Protection', 'Audit Trails', 'Data Encryption', 'Compliance Reporting']
  }
];

// Combined integrations for display
export const allIntegrations: Integration[] = [
  ...coreIntegrations,
  ...childWelfareIntegrations,
  ...analyticsIntegrations,
  ...communicationIntegrations,
  ...workflowIntegrations,
  ...securityIntegrations
];

// Featured integrations for hero display
export const featuredIntegrations = allIntegrations.filter(integration => integration.featured);

// Integrations by category for organized display
export const integrationsByCategory = {
  core: coreIntegrations,
  'child-welfare': childWelfareIntegrations,
  analytics: analyticsIntegrations,
  communication: communicationIntegrations,
  workflow: workflowIntegrations,
  security: securityIntegrations
};

// Category display names
export const categoryNames = {
  core: 'Core Platforms',
  'child-welfare': 'Child Welfare Systems',
  analytics: 'Analytics & Reporting',
  communication: 'Communication Tools',
  workflow: 'Workflow & Productivity',
  security: 'Security & Compliance'
};