type HintBoxProps = {
  mode: "hint";
  children: React.ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: React.ReactNode;
};

/* discriminated union */
type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props;
  // info, warning
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <h2>Hint</h2>
        <p>{children}</p>
      </aside>
    );
  }

  /* since we are out of hint, ts knows that severity can be here */
  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
