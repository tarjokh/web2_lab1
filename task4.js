function mostOften(arr)
{
    let n = arr.lenght;
    arr.sort();
    let max_count = 1, res = arr[0];
    let curr_count = 1;
    for (let i = 1; i < n; i++)
    {
        if (arr[i] == arr[i - 1])
            curr_count++;
        else
        {
            if (curr_count > max_count)
            {
                max_count = curr_count;
                res = arr[i - 1];
            }
            curr_count = 1;
        }
    }

    if (curr_count > max_count)
    {
        max_count = curr_count;
        res = arr[n - 1];
    }
    return res;
}

console.log(mostOften([1, 2, 2, 2, 2, 3, 7]))