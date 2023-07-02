import React from "react";

interface TestProps {
    count: number;
}

const Test: React.FC<TestProps> = ({ count }) => {
    return (
        <div>
            {count >= 18 ? `Tu es majeur, tu as ${count} ans.` : `Tu es mineur, tu as ${count} ans.`}
        </div>
    );
}

export default Test;