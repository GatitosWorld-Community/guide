import { notFound } from "next/navigation";

export default async function Page({ params: paramsPromise }: { params: Promise<{ slug: string[] }> }) {
  await paramsPromise;
  return notFound();
}


