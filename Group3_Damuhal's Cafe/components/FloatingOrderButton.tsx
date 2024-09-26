// components/FloatingOrderButton.tsx

export default function FloatingOrderButton() {
  return (
    <a
      href="/Menu" // Link to the order page
      className="fixed bottom-6 right-6 bg-yellow-500 text-black py-3 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out"
    >
      Order Now
    </a>
  );
}
