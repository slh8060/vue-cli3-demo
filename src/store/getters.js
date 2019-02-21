export default {
    evenOrOdd(state) {
      return state.count % 2 === 0 ? 'Odd' : 'Even';
    },
    recentHistory(state) {
        const end = state.history.length;
        const start = end - 5 > 0 ? end - 5 : 0;
        return state.history.slice(start, end).join(', ');
    }
}