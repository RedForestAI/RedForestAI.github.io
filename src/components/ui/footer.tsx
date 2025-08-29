
export function Footer() {

  return (
      <footer className="border-t py-8">
        <div className="container mx-auto max-w-6xl px-4 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Eduardo Davalos Anaya. All rights reserved.
        </div>
      </footer>
  )
}