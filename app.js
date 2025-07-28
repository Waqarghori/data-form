// app.js
import { createClient } from "https://esm.sh/@supabase/supabase-js"

const supabaseUrl = "https://ojoqeqkjvgckrfkcyrbo.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qb3FlcWtqdmdja3Jma2N5cmJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2Nzg0MzAsImV4cCI6MjA2OTI1NDQzMH0.I57r4FrsaU0m1w-pAGPnWW4V6JTgA9qYuV9cPBU2GWI"

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
