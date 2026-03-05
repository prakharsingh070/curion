import { useState } from "react";

type ProfileData = {
  age: string;
  gender: string;
  chronicConditions: string;
  allergies: string;
  medications: string;
};

export function Profile() {
  const [profile, setProfile] = useState<ProfileData>({
    age: "",
    gender: "",
    chronicConditions: "",
    allergies: "",
    medications: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save profile data
    alert("Profile saved! (This will be implemented in the backend)");
  };

  return (
    <div className="flex flex-col h-full min-h-screen p-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-2">Your Profile</h1>
        <p className="text-muted-foreground mb-8">
          Help us provide better health guidance by sharing your information
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Age */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Age
            </label>
            <input
              type="number"
              value={profile.age}
              onChange={(e) => setProfile({ ...profile, age: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Enter your age"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Gender
            </label>
            <select
              value={profile.gender}
              onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>

          {/* Chronic Conditions */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Chronic Conditions
            </label>
            <textarea
              value={profile.chronicConditions}
              onChange={(e) =>
                setProfile({ ...profile, chronicConditions: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              rows={3}
              placeholder="e.g., Diabetes, Hypertension, Asthma"
            />
            <p className="text-xs text-muted-foreground mt-1">
              List any chronic health conditions you have
            </p>
          </div>

          {/* Allergies */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Allergies
            </label>
            <textarea
              value={profile.allergies}
              onChange={(e) =>
                setProfile({ ...profile, allergies: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              rows={2}
              placeholder="e.g., Penicillin, Peanuts, Latex"
            />
            <p className="text-xs text-muted-foreground mt-1">
              List any known allergies
            </p>
          </div>

          {/* Current Medications */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Current Medications
            </label>
            <textarea
              value={profile.medications}
              onChange={(e) =>
                setProfile({ ...profile, medications: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              rows={3}
              placeholder="e.g., Metformin 500mg, Lisinopril 10mg"
            />
            <p className="text-xs text-muted-foreground mt-1">
              List any medications you're currently taking
            </p>
          </div>

          {/* Privacy Notice */}
          <div className="bg-muted/50 border border-border rounded-lg p-4">
            <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Privacy & Security
            </h3>
            <p className="text-xs text-muted-foreground">
              Your information is stored locally and encrypted. We never share your
              personal health data with third parties.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}
