
export default function Header() {
    return (
        <div className="bg-brand-color"> 
          <div className="container mx-auto h-11 flex items-center justify-between">
            <a href="/" className="text-white">Home</a>

            <nav className="flex gap-x-8 text-sm font-semibold">
                <a href="">
                    Enlish(en)
                </a>
                <a href="">
                    Sign Up
                </a>
                <a href="/">
                    Login
                </a>
            </nav>
          </div>
        </div>
    )
}
