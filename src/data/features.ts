import React from 'react';
import {
  GitBranch,
  Shield,
  Users,
  BarChart3,
  Zap,
  AlertTriangle,
  Clock,
  Bell,
  FileText,
  CheckCircle,
  Eye,
  TrendingUp
} from 'lucide-react';
import { Feature } from '@/types/features';

// SOLID Principle: Single Responsibility - Features data configuration
// DRY Principle: Centralized features data for reusability

export const coreFeatures: Feature[] = [
  {
    id: 'automated-pipeline',
    title: 'Automated Pipeline Management',
    description: 'Intelligent automation that streamlines your JIRA workflows with smart ticket routing, status tracking, and bottleneck detection.',
    icon: React.createElement(GitBranch, { className: "w-full h-full" }),
    color: 'primary',
    highlight: true,
    benefits: [
      'Smart ticket routing based on priority and team availability',
      'Automated status updates across workflow stages',
      'Real-time bottleneck detection and alerts',
      'Custom workflow rules and triggers'
    ]
  },
  {
    id: 'child-welfare-compliance',
    title: 'Child Welfare Compliance',
    description: 'Specialized compliance features ensuring regulatory requirements are met with automated tracking and documentation.',
    icon: React.createElement(Shield, { className: "w-full h-full" }),
    color: 'success',
    benefits: [
      'Automated regulatory requirement tracking',
      'Comprehensive audit trail maintenance',
      'Documentation automation for compliance reports',
      'Policy violation alerts and remediation'
    ]
  },
  {
    id: 'team-collaboration',
    title: 'Team Collaboration',
    description: 'Enhanced collaboration tools with real-time notifications, progress visibility, and automated stakeholder updates.',
    icon: React.createElement(Users, { className: "w-full h-full" }),
    color: 'accent',
    benefits: [
      'Real-time notifications for critical updates',
      'Progress visibility across all team levels',
      'Automated stakeholder status reports',
      'Cross-team coordination tools'
    ]
  },
  {
    id: 'analytics-reporting',
    title: 'Analytics & Reporting',
    description: 'Comprehensive analytics with performance dashboards, workflow insights, and detailed time tracking capabilities.',
    icon: React.createElement(BarChart3, { className: "w-full h-full" }),
    color: 'warning',
    highlight: true,
    benefits: [
      'Real-time performance dashboards',
      'Workflow efficiency insights and recommendations',
      'Detailed time tracking and resource allocation',
      'Custom report generation and scheduling'
    ]
  }
];

export const additionalFeatures: Feature[] = [
  {
    id: 'smart-automation',
    title: 'Smart Automation',
    description: 'AI-powered automation that learns from your workflow patterns.',
    icon: React.createElement(Zap, { className: "w-full h-full" }),
    color: 'primary',
  },
  {
    id: 'risk-detection',
    title: 'Risk Detection',
    description: 'Proactive identification of potential issues and risks.',
    icon: React.createElement(AlertTriangle, { className: "w-full h-full" }),
    color: 'error',
  },
  {
    id: 'time-tracking',
    title: 'Time Tracking',
    description: 'Comprehensive time tracking and resource management.',
    icon: React.createElement(Clock, { className: "w-full h-full" }),
    color: 'secondary',
  },
  {
    id: 'notifications',
    title: 'Smart Notifications',
    description: 'Intelligent notification system with priority filtering.',
    icon: React.createElement(Bell, { className: "w-full h-full" }),
    color: 'accent',
  },
  {
    id: 'documentation',
    title: 'Auto Documentation',
    description: 'Automated documentation generation and maintenance.',
    icon: React.createElement(FileText, { className: "w-full h-full" }),
    color: 'success',
  },
  {
    id: 'quality-assurance',
    title: 'Quality Assurance',
    description: 'Built-in quality checks and validation processes.',
    icon: React.createElement(CheckCircle, { className: "w-full h-full" }),
    color: 'primary',
  },
  {
    id: 'monitoring',
    title: 'System Monitoring',
    description: 'Real-time system monitoring and health checks.',
    icon: React.createElement(Eye, { className: "w-full h-full" }),
    color: 'secondary',
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization',
    description: 'Continuous performance monitoring and optimization.',
    icon: React.createElement(TrendingUp, { className: "w-full h-full" }),
    color: 'warning',
  }
];