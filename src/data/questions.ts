import React from 'react';
import {
  AlertTriangle,
  BarChart3,
  Clock,
  FileText,
  Shield,
  Users,
  TrendingUp,
  Search,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { SampleQuestion } from '@/types/carousel';

// SOLID Principle: Single Responsibility - Questions data configuration
// DRY Principle: Centralized sample questions for reusability

export const sampleQuestions: SampleQuestion[] = [
  {
    id: 'blocked-tickets',
    question: 'Show me all tickets blocked for more than 3 days',
    answer: 'Found 7 tickets blocked for 3+ days: 2 pending legal review, 3 waiting for external approvals, 2 requiring additional case documentation. Escalation recommended for compliance timeline adherence.',
    category: 'monitoring',
    complexity: 'simple',
    icon: React.createElement(AlertTriangle, { className: "w-full h-full" })
  },
  {
    id: 'resolution-time',
    question: "What's the average resolution time for compliance issues?",
    answer: 'Current compliance issue resolution: 4.2 days average (target: 3 days). Contributing factors: documentation review (1.8 days), approval workflows (1.6 days), implementation (0.8 days). Recommend streamlining approval process.',
    category: 'analytics',
    complexity: 'medium',
    icon: React.createElement(BarChart3, { className: "w-full h-full" })
  },
  {
    id: 'workload-analysis',
    question: 'Which team member has the highest workload this sprint?',
    answer: 'Sarah Johnson: 23 active tickets (18% above team average). Breakdown: 8 high-priority compliance, 12 standard workflow, 3 training items. Recommend workload redistribution or additional support.',
    category: 'workflow',
    complexity: 'medium',
    icon: React.createElement(Users, { className: "w-full h-full" })
  },
  {
    id: 'status-report',
    question: 'Generate a status report for the quarterly review',
    answer: 'Q3 Performance Summary: 87% on-time completion (target: 85%). 156 cases processed, 23 compliance issues resolved, 4.1 day average resolution. Key improvements: automated routing reduced processing time by 23%.',
    category: 'reporting',
    complexity: 'advanced',
    icon: React.createElement(FileText, { className: "w-full h-full" })
  },
  {
    id: 'missing-documentation',
    question: 'Flag any tickets missing required documentation',
    answer: 'Documentation audit complete: 12 tickets missing required files. Priority: 4 safety assessments, 5 background checks, 3 court documents. Auto-notifications sent to responsible case workers.',
    category: 'compliance',
    complexity: 'simple',
    icon: React.createElement(Shield, { className: "w-full h-full" })
  },
  {
    id: 'performance-trends',
    question: 'Show performance trends for the past month',
    answer: 'Monthly trends: 15% improvement in case closure rate, 22% reduction in documentation delays. Team productivity up 18%. Notable: weekend backlog clearing initiative yielded significant results.',
    category: 'analytics',
    complexity: 'medium',
    icon: React.createElement(TrendingUp, { className: "w-full h-full" })
  },
  {
    id: 'urgent-cases',
    question: 'What urgent cases need immediate attention?',
    answer: '3 critical cases identified: 1 safety concern (24hr response required), 1 court deadline (tomorrow), 1 emergency placement. All cases flagged and assigned to priority workflow with supervisor notification.',
    category: 'monitoring',
    complexity: 'simple',
    icon: React.createElement(AlertCircle, { className: "w-full h-full" })
  },
  {
    id: 'case-search',
    question: 'Find all cases with similar characteristics to Case #12345',
    answer: 'Pattern match analysis: 8 similar cases found based on family structure, risk factors, and service needs. Common interventions: family counseling (6/8), housing assistance (5/8), educational support (7/8).',
    category: 'workflow',
    complexity: 'advanced',
    icon: React.createElement(Search, { className: "w-full h-full" })
  }
];

// Alternative shorter questions for compact display
export const quickQuestions: SampleQuestion[] = [
  {
    id: 'quick-blocked',
    question: 'Show blocked tickets',
    answer: '7 tickets blocked 3+ days',
    category: 'monitoring',
    complexity: 'simple',
    icon: React.createElement(Clock, { className: "w-full h-full" })
  },
  {
    id: 'quick-compliance',
    question: 'Compliance status?',
    answer: '87% completion rate',
    category: 'compliance',
    complexity: 'simple',
    icon: React.createElement(CheckCircle, { className: "w-full h-full" })
  },
  {
    id: 'quick-workload',
    question: 'Team workload check',
    answer: 'Sarah: 23 tickets (highest)',
    category: 'workflow',
    complexity: 'simple',
    icon: React.createElement(Users, { className: "w-full h-full" })
  },
  {
    id: 'quick-urgent',
    question: 'Any urgent cases?',
    answer: '3 critical cases flagged',
    category: 'monitoring',
    complexity: 'simple',
    icon: React.createElement(AlertTriangle, { className: "w-full h-full" })
  }
];