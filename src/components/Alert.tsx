type Props = {
  type?: "info" | "success" | "warning" | "error";
  children: React.ReactNode;
};

const colors = {
  info: "#e8f2ff",
  success: "#e8f8f0",
  warning: "#fff6e5",
  error: "#ffecec",
};

export function Alert({ type = "info", children }: Props) {
  return (
    <div
      style={{
        background: colors[type],
        borderRadius: 12,
        padding: "12px 16px",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {children}
    </div>
  );
}
