export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return <div className="grid grid-cols-[auto_1fr_auto] gap-10 h-screen">{children}</div>
}