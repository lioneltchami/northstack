import ValueCTA from '../ui/ValueCTA';

export default function ValueCTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-gray-900">
            Free Resources to Get You Started
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            No commitment required. Get immediate value with our free tools and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ValueCTA type="audit" variant="compact" />
          <ValueCTA type="checklist" variant="compact" />
          <ValueCTA type="calculator" variant="compact" />
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">Trusted by 50+ Canadian businesses</span> • No credit card required • Instant access
          </p>
        </div>
      </div>
    </section>
  );
}
