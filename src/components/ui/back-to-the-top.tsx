import { Button } from "./button";

export function BackToTheTop() {

  return (
      <div className="fixed bottom-5 right-5">
        <Button
          variant="secondary"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="shadow-lg"
        >
          Back to top
        </Button>
      </div>
  )
}