'use client';

import { Check } from 'lucide-react';

const colors = {
  white: '#FFFFFF',
  charcoal: '#0F172A',
  gray100: '#F1F5F9',
  gray200: '#E2E8F0',
  gray400: '#94A3B8',
  gray500: '#64748B',
  blueLight: '#EFF6FF',
  bluePrimary: '#1E40AF',
  blueDark: '#002654',
};

interface Step {
  id: number;
  title: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (step: number) => void;
  orientation?: 'horizontal' | 'vertical';
}

export default function Stepper({ 
  steps, 
  currentStep, 
  onStepClick,
  orientation = 'horizontal' 
}: StepperProps) {
  if (orientation === 'vertical') {
    return (
      <div className="space-y-4">
        {steps.map((step, index) => {
          const isCompleted = index + 1 < currentStep;
          const isCurrent = index + 1 === currentStep;
          const isClickable = onStepClick && (isCompleted || isCurrent);

          return (
            <div key={step.id} className="relative flex gap-4">
              {/* Line */}
              {index < steps.length - 1 && (
                <div 
                  className="absolute left-5 top-10 w-0.5 h-full -ml-px"
                  style={{ background: colors.gray200 }}
                >
                  {isCompleted && (
                    <div className="w-full h-full" style={{ background: colors.bluePrimary }} />
                  )}
                </div>
              )}
              
              {/* Circle */}
              <button
                onClick={() => isClickable && onStepClick?.(index + 1)}
                disabled={!isClickable}
                className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                  isClickable ? 'cursor-pointer hover:scale-105' : 'cursor-default'
                }`}
                style={{
                  background: isCompleted 
                    ? colors.bluePrimary 
                    : isCurrent 
                      ? colors.blueDark 
                      : colors.gray100,
                  color: isCompleted || isCurrent ? 'white' : colors.gray400,
                  boxShadow: isCurrent ? `0 0 0 4px ${colors.blueLight}` : 'none',
                }}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : step.id}
              </button>

              {/* Content */}
              <div className="pb-8">
                <h4 
                  className="font-semibold"
                  style={{ color: isCurrent ? colors.blueDark : colors.charcoal }}
                >
                  {step.title}
                </h4>
                {step.description && (
                  <p className="text-sm mt-1" style={{ color: colors.gray500 }}>{step.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Horizontal orientation
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => {
        const isCompleted = index + 1 < currentStep;
        const isCurrent = index + 1 === currentStep;
        const isClickable = onStepClick && (isCompleted || isCurrent);

        return (
          <div key={step.id} className="flex items-center flex-1">
            {/* Step */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => isClickable && onStepClick?.(index + 1)}
                disabled={!isClickable}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                  isClickable ? 'cursor-pointer hover:scale-105' : 'cursor-default'
                }`}
                style={{
                  background: isCompleted 
                    ? colors.bluePrimary 
                    : isCurrent 
                      ? colors.blueDark 
                      : colors.gray100,
                  color: isCompleted || isCurrent ? 'white' : colors.gray400,
                  boxShadow: isCurrent ? `0 0 0 4px ${colors.blueLight}` : 'none',
                }}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : step.id}
              </button>
              <span 
                className="text-xs mt-2 text-center max-w-20"
                style={{
                  fontWeight: isCurrent ? 500 : 400,
                  color: isCurrent ? colors.blueDark : colors.gray500,
                }}
              >
                {step.title}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div 
                className="flex-1 h-0.5 mx-4 relative"
                style={{ background: colors.gray200 }}
              >
                {isCompleted && (
                  <div className="absolute inset-0" style={{ background: colors.bluePrimary }} />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Simple Progress Steps (inline)
interface ProgressStepsProps {
  total: number;
  current: number;
  labels?: string[];
}

export function ProgressSteps({ total, current, labels }: ProgressStepsProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium"
            style={{
              background: i + 1 < current 
                ? colors.bluePrimary 
                : i + 1 === current 
                  ? colors.blueDark 
                  : colors.gray100,
              color: i + 1 <= current ? 'white' : colors.gray400,
            }}
          >
            {i + 1 < current ? <Check className="w-4 h-4" /> : i + 1}
          </div>
          {labels && labels[i] && (
            <span 
              className="text-sm hidden md:inline"
              style={{
                fontWeight: i + 1 === current ? 500 : 400,
                color: i + 1 === current ? colors.blueDark : colors.gray500,
              }}
            >
              {labels[i]}
            </span>
          )}
          {i < total - 1 && (
            <div 
              className="w-8 h-0.5"
              style={{ background: i + 1 < current ? colors.bluePrimary : colors.gray200 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
