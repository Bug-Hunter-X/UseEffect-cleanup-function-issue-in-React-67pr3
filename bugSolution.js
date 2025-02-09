```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeoutId;
    // Correct Logic: Use a cleanup function to clear the timeout
    timeoutId = setTimeout(() => setCount(10), 1000);
    return () => clearTimeout(timeoutId); // Cleanup function
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```