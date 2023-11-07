"use client";

/**
 * Observe "use client" above.
 *
 * This will still run on the server due to SSR.
 */

export const SimpleComponent = () => {
  // You will see this on the client AND server, despite it being under "use client"
  console.log("Im on the client");

  return <p>Im rendered on the client</p>;
};
