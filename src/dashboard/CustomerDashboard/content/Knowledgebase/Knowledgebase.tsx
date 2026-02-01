export default function Knowledgebase() {
  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Knowledge Base</h1>

      <p className="text-gray-700">
        Here you will find helpful articles, FAQs, and guides.
      </p>

      <ul className="mt-4 list-disc ml-6">
        <li>How to create a ticket</li>
        <li>How to track your ticket</li>
        <li>Understanding ticket statuses</li>
      </ul>
    </div>
  );
}
