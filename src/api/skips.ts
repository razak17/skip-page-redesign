import axios from "axios";

const api = import.meta.env.VITE_PUBLIC_API_ENDPOINT;

export type Skip = {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
};

export async function getSkipsByLocation(
  postcode = "NR32",
  area = "Lowestoft",
): Promise<Skip[]> {
  try {
    const response = await axios.get(
      `${api}/skips/by-location?postcode=${postcode}&area=${area}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching skips:", error);
    throw error;
  }
}
