// app.js
import { createClient } from "https://esm.sh/@supabase/supabase-js"

const supabaseUrl = "https://YOUR-PROJECT.supabase.co"
const supabaseKey = "YOUR-ANON-KEY"

const supabase = createClient(supabaseUrl, supabaseKey)

window.submitData = async function () {
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value

  let { data, error } = await supabase
    .from("users")
    .insert([{ name, email }])

  if (error) {
    alert("Error: " + error.message)
  } else {
    alert("User saved!")
    console.log(data)
  }
}
