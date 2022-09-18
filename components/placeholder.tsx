export default function PlaceholderComp({ height }: { height?: string }) {
    return <div style={{ marginBottom: height ?? "50px" }}></div>;
}
