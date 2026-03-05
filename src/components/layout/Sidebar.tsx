import { MessageSquare, LayoutDashboard, User } from "lucide-react";
import { Activity } from "lucide-react";

type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};

type Props = {
  activeView: string;
  onNavigate: (view: string) => void;
};

export function Sidebar({ activeView, onNavigate }: Props) {
  const navItems: NavItem[] = [
    {
      id: "chat",
      label: "Chat",
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      id: "profile",
      label: "Profile",
      icon: <User className="w-5 h-5" />,
    },
  ];

  return (
    <aside className="w-72 bg-background border-r border-border flex flex-col h-screen">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold">Curion</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeView === item.id
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground">
          <p className="font-semibold mb-1">Curion v1.0</p>
          <p>Not a medical professional</p>
        </div>
      </div>
    </aside>
  );
}
