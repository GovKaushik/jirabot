import React from 'react';
import {
  Zap,
  Settings,
  Users,
  TrendingUp,
  Link,
  Brain,
  GraduationCap,
  BarChart3
} from 'lucide-react';
import { ProcessStep } from '@/types/process';

// SOLID Principle: Single Responsibility - Process steps data configuration
// DRY Principle: Centralized process data for reusability

export const implementationSteps: ProcessStep[] = [
  {
    id: 'quick-setup',
    number: 1,
    title: 'Quick Setup',
    description: 'One-click JIRA integration that connects seamlessly with your existing workflow infrastructure.',
    details: [
      'Connect to JIRA instance with OAuth authentication',
      'Automatic project discovery and mapping',
      'Import existing workflows and configurations',
      'Zero-downtime integration process'
    ],
    icon: React.createElement(Link, { className: "w-full h-full" }),
    color: 'primary',
    duration: '5-10 minutes',
    complexity: 'simple'
  },
  {
    id: 'ai-configuration',
    number: 2,
    title: 'AI Configuration',
    description: 'Customize the AI bot for child welfare-specific workflows with intelligent rule engine.',
    details: [
      'Configure child welfare compliance rules',
      'Set up automated workflow triggers',
      'Define priority and escalation policies',
      'Customize notification preferences'
    ],
    icon: React.createElement(Brain, { className: "w-full h-full" }),
    color: 'accent',
    duration: '15-30 minutes',
    complexity: 'medium'
  },
  {
    id: 'team-onboarding',
    number: 3,
    title: 'Team Onboarding',
    description: 'Comprehensive training program to get your team productive with automated processes.',
    details: [
      'Interactive training modules for team members',
      'Role-based access control setup',
      'Custom dashboard configuration',
      'Best practices and workflow optimization'
    ],
    icon: React.createElement(GraduationCap, { className: "w-full h-full" }),
    color: 'success',
    duration: '1-2 hours',
    complexity: 'medium'
  },
  {
    id: 'monitor-optimize',
    number: 4,
    title: 'Monitor & Optimize',
    description: 'Continuous performance tracking with AI-powered insights and recommendations.',
    details: [
      'Real-time performance monitoring dashboard',
      'Automated bottleneck detection and alerts',
      'Weekly optimization recommendations',
      'Continuous learning and improvement cycles'
    ],
    icon: React.createElement(TrendingUp, { className: "w-full h-full" }),
    color: 'warning',
    duration: 'Ongoing',
    complexity: 'simple'
  }
];

export const alternativeSteps: ProcessStep[] = [
  {
    id: 'connect',
    number: 1,
    title: 'Connect',
    description: 'Seamlessly integrate with your JIRA environment.',
    icon: React.createElement(Zap, { className: "w-full h-full" }),
    color: 'primary',
    duration: '5 min',
    complexity: 'simple'
  },
  {
    id: 'configure',
    number: 2,
    title: 'Configure',
    description: 'Set up AI rules for your specific workflow needs.',
    icon: React.createElement(Settings, { className: "w-full h-full" }),
    color: 'secondary',
    duration: '20 min',
    complexity: 'medium'
  },
  {
    id: 'collaborate',
    number: 3,
    title: 'Collaborate',
    description: 'Train your team on the new automated processes.',
    icon: React.createElement(Users, { className: "w-full h-full" }),
    color: 'accent',
    duration: '1 hour',
    complexity: 'medium'
  },
  {
    id: 'analyze',
    number: 4,
    title: 'Analyze',
    description: 'Monitor performance and optimize workflows.',
    icon: React.createElement(BarChart3, { className: "w-full h-full" }),
    color: 'success',
    duration: 'Ongoing',
    complexity: 'simple'
  }
];