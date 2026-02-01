export default function Stats() {
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Agent Stats</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">Total Tickets: 10</div>
        <div className="bg-white p-4 shadow rounded">Open Tickets: 4</div>
        <div className="bg-white p-4 shadow rounded">Closed Tickets: 6</div>
      </div>
    </div>
  );
}
