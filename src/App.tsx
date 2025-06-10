import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Minus, Plus, RotateCcw } from "lucide-react";

export default function App() {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Counter App</CardTitle>
          <CardDescription>Click the buttons to change the count</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-6">
            <div className="text-7xl font-bold text-primary">{count}</div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={decrement}
                aria-label="Decrement"
              >
                <Minus className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={reset}
                aria-label="Reset"
              >
                <RotateCcw className="h-5 w-5" />
              </Button>
              <Button
                variant="default"
                size="icon"
                onClick={increment}
                aria-label="Increment"
              >
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}