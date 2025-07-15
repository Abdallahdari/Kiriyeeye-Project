import { getGuryoById } from "../../_lib/data";

export default async function Page({ params }) {
  try {
    const house = await getGuryoById(params.id);

    if (!house) {
      return <div>House not found</div>;
    }

    return (
      <div>
        <h1>{house.name}</h1>
        {/* Render other house data */}
      </div>
    );
  } catch (error) {
    console.error("Page error:", error);
    return <div>Error loading house: {error.message}</div>;
  }
}
