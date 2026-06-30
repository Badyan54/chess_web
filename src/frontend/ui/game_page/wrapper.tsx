export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return <div className="grid grid-cols-[auto_1fr_auto] flex-1 divide-x divide-[#1F232B]">{children}</div>
}