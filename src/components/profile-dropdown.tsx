import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { User, Settings, FileText, LogOut } from "lucide-react";

interface Props {
  imageSrc: string;
  onProfileClick: () => void;
  onResumeClick: () => void;
}

const MENU_WIDTH = 236; // w-56

const ProfileDropdown = ({ imageSrc, onProfileClick, onResumeClick }: Props) => {
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const computePosition = () => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const top = rect.bottom + 8 + window.scrollY;
    const left = rect.left + window.scrollX;

    setStyle({
      position: "absolute",
      top,
      left,
      width: MENU_WIDTH,
      zIndex: 9999
    });
  };

  useEffect(() => {
    if (open) computePosition();
  }, [open]);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const menu = document.getElementById("profile-dropdown-menu");
      if (
        menu &&
        !menu.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const menu = open
    ? createPortal(
        <div
          id="profile-dropdown-menu"
          style={style}
          className="bg-card border border-border rounded-md shadow-xl p-1"
        >
          <div className="px-3 py-2 text-sm">
            <p className="font-medium">Govardhan Reddy Shanigaram</p>
            <p className="text-muted-foreground text-xs">
              govardhanreddy4628@gmail.com
            </p>
          </div>

          <div className="border-t border-border my-1" />

          <button
            className="w-full flex items-center gap-2 p-2 text-sm rounded-md hover:bg-accent/10"
            onClick={() => {
              onProfileClick();
              setOpen(false);
            }}
          >
            <User className="h-4 w-4" /> Profile
          </button>

          <button
            className="w-full flex items-center gap-2 p-2 text-sm rounded-md hover:bg-accent/10"
            onClick={() => {
              onResumeClick();
              setOpen(false);
            }}
          >
            <FileText className="h-4 w-4" /> Resume
          </button>

          <button
            className="w-full flex items-center gap-2 p-2 text-sm rounded-md hover:bg-accent/10"
            onClick={() => alert("Settings feature coming soon!")}
          >
            <Settings className="h-4 w-4" /> Settings
          </button>

          <div className="border-t border-border my-1" />

          <button
            className="w-full flex items-center gap-2 p-2 text-sm rounded-md hover:bg-accent/10"
            onClick={() => alert("Logout will be implemented later")}
          >
            <LogOut className="h-4 w-4" /> Log out
          </button>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full border-2 border-primary/40 hover:border-primary transition-all overflow-hidden focus:outline-none"
      >
        <img src={imageSrc} className="w-full h-full object-cover" />
      </button>
      {menu}
    </>
  );
};

export default ProfileDropdown;
