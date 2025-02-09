```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: Immediately sets count to 10, then to 0 after 1 second
    setCount(10);
    setTimeout(() => setCount(0), 1000);
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```