export function Dashboard() {
  return (
    <div className="flex flex-col h-full min-h-screen p-8">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-2">Health Dashboard</h1>
        <p className="text-muted-foreground mb-8">
          Track your symptoms and health history
        </p>

        {/* Coming Soon Message */}
        <div className="grid gap-6">
          <div className="border border-border rounded-xl p-8 text-center bg-muted/30">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Your health dashboard is under development. Soon you'll be able to
              view your symptom history, health trends, and personalized insights.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="font-semibold mb-2">📊 Symptom Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Monitor your symptoms over time and identify patterns
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="font-semibold mb-2">📈 Health Trends</h3>
              <p className="text-sm text-muted-foreground">
                Visualize your health data with interactive charts
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="font-semibold mb-2">🎯 Risk Assessment</h3>
              <p className="text-sm text-muted-foreground">
                Get personalized health risk assessments based on your profile
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
