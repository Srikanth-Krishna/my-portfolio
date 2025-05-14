export default function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '1rem',
        color: '#666',
      }}
    >
      © {new Date().getFullYear()} Srikanth Krishna. All rights reserved.
    </footer>
  );
}
