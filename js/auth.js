const client = supabase.createClient(
  "https://wytqvoeosivrjgfluofh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5dHF2b2Vvc2l2cmpnZmx1b2ZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExMzI3NDgsImV4cCI6MTk4NjcwODc0OH0.n_V1dF7QuHqYkY0ZJh_9cTJZ6RrfApMeK8wMwCMItTA"
);

function logout() {
  client.auth.signOut().then(() => {
    location.reload();
  });
}

function login() {
  client.auth
    .signInWithPassword({
      email: document.getElementById("username").value,
      password: document.getElementById("password").value,
    })
    .then(({ data, error }) => {
      location.reload();
    });
}
