export default function GridOverlay() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0">
            {/* Gradient background */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-10" /> */}

            {/* Grid lines overlaid on gradient */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.3)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
    );
}
