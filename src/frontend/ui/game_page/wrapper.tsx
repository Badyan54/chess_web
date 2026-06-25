export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return <div className="flex h-screen">{children}</div>
}