export default function Sitemap() {
  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">Sitemap</h1>
      <ul className="space-y-4 text-lg">
        <li>
          <a href="/" className="text-blue-600 hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/products" className="text-blue-600 hover:underline">
            Products
          </a>
        </li>
        <li>
          <a href="/about" className="text-blue-600 hover:underline">
            About Us
          </a>
        </li>
        <li>
          <a href="/contact" className="text-blue-600 hover:underline">
            Contact Us
          </a>
        </li>
        <li>
          <a href="/cart" className="text-blue-600 hover:underline">
            Cart
          </a>
        </li>
        <li>
          <a href="/sitemap" className="text-blue-600 hover:underline">
            Sitemap
          </a>
        </li>
      </ul>
    </div>
  )
}