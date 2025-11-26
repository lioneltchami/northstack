'use client';

import { useState } from 'react';
import Hero from '@/components/ui/Hero';
import { Calculator, TrendingDown, DollarSign, Percent } from 'lucide-react';

export default function CostCalculatorPage() {
  const [inputs, setInputs] = useState({
    monthlySpend: 5000,
    unusedResources: 20,
    rightSizingOpportunity: 30,
    storageOptimization: 15,
  });

  const calculateSavings = () => {
    const unusedSavings = inputs.monthlySpend * (inputs.unusedResources / 100);
    const rightSizingSavings = inputs.monthlySpend * (inputs.rightSizingOpportunity / 100);
    const storageSavings = inputs.monthlySpend * (inputs.storageOptimization / 100);

    const totalMonthlySavings = unusedSavings + rightSizingSavings + storageSavings;
    const annualSavings = totalMonthlySavings * 12;
    const savingsPercentage = (totalMonthlySavings / inputs.monthlySpend) * 100;

    return {
      monthly: totalMonthlySavings,
      annual: annualSavings,
      percentage: savingsPercentage,
      breakdown: {
        unused: unusedSavings,
        rightSizing: rightSizingSavings,
        storage: storageSavings,
      },
    };
  };

  const savings = calculateSavings();

  return (
    <>
      <Hero
        title="Cloud Cost Calculator"
        subtitle="Calculate Your Potential Savings"
        description="Use our interactive calculator to estimate how much you could save by optimizing your cloud infrastructure."
        variant="gradient"
        size="medium"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Inputs */}
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6 text-gray-900">
                Your Current Situation
              </h2>
              <div className="space-y-6">
                {/* Monthly Spend */}
                <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Current Monthly Cloud Spend
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">$</span>
                    <input
                      type="number"
                      value={inputs.monthlySpend}
                      onChange={(e) => setInputs({ ...inputs, monthlySpend: parseFloat(e.target.value) || 0 })}
                      className="flex-1 px-4 py-3 text-2xl font-bold rounded-lg border-2 border-gray-400 bg-white text-gray-900 focus:border-primary-700 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Unused Resources */}
                <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-gray-700">
                      Unused Resources
                    </label>
                    <span className="text-2xl font-bold text-primary-700">{inputs.unusedResources}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={inputs.unusedResources}
                    onChange={(e) => setInputs({ ...inputs, unusedResources: parseInt(e.target.value) })}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-600 mt-2">
                    Industry average: 20-30% of resources are unused or idle
                  </p>
                </div>

                {/* Right-Sizing */}
                <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-gray-700">
                      Right-Sizing Opportunity
                    </label>
                    <span className="text-2xl font-bold text-primary-700">{inputs.rightSizingOpportunity}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="60"
                    value={inputs.rightSizingOpportunity}
                    onChange={(e) => setInputs({ ...inputs, rightSizingOpportunity: parseInt(e.target.value) })}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-600 mt-2">
                    Resources that are over-provisioned or inefficient
                  </p>
                </div>

                {/* Storage Optimization */}
                <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-gray-700">
                      Storage Optimization
                    </label>
                    <span className="text-2xl font-bold text-primary-700">{inputs.storageOptimization}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="40"
                    value={inputs.storageOptimization}
                    onChange={(e) => setInputs({ ...inputs, storageOptimization: parseInt(e.target.value) })}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-600 mt-2">
                    Savings from tiering, compression, and lifecycle policies
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-lg shadow-xl">
                <div className="text-center mb-8">
                  <div className="inline-block p-4 bg-white/20 rounded-lg mb-4">
                    <TrendingDown className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-2">
                    Your Potential Savings
                  </h3>
                </div>

                {/* Monthly Savings */}
                <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6">
                  <p className="text-sm text-white/80 mb-2">Monthly Savings</p>
                  <p className="text-5xl font-bold mb-2">${savings.monthly.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                  <p className="text-white/90">
                    {savings.percentage.toFixed(1)}% reduction in costs
                  </p>
                </div>

                {/* Annual Savings */}
                <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6">
                  <p className="text-sm text-white/80 mb-2">Annual Savings</p>
                  <p className="text-4xl font-bold">${savings.annual.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                </div>

                {/* Breakdown */}
                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold mb-3">Savings Breakdown</h4>
                  <div className="flex items-center justify-between py-2 border-b border-white/20">
                    <span className="text-sm">Unused Resources</span>
                    <span className="font-semibold">${savings.breakdown.unused.toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/20">
                    <span className="text-sm">Right-Sizing</span>
                    <span className="font-semibold">${savings.breakdown.rightSizing.toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm">Storage Optimization</span>
                    <span className="font-semibold">${savings.breakdown.storage.toLocaleString('en-US', { maximumFractionDigits: 0 })}/mo</span>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="block w-full text-center px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Get Your Free Audit
                </a>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-blue-900">Note:</strong> These are conservative estimates. Actual savings often exceed these projections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
