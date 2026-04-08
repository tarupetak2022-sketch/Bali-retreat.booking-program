const SUPABASE_URL = "https://pagyrvsqlwekcgkhauph.supabase.co";
const SUPABASE_KEY = "sb_publishable_Z1tS7Vgnat2APkfnnUJiNQ_EZN6rHtV";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadBookings() {
  const { data } = await client.from("bookings").select("*").order("date");
  console.log(data);
}

loadBookings();
