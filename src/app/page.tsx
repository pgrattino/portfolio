export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <p style={{justifySelf:"center", alignSelf:"center"}}>Peyton Grattino&#39;s Portfolio</p>
          <p style={{justifySelf:"center", alignSelf:"center"}}>Currently in development. Check back soon for updates!</p>
      </main>
    </div>
  );
}
