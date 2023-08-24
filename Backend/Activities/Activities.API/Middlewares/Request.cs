public class RequestMiddleware
{
    private readonly RequestDelegate _next;

    public RequestMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task Invoke(HttpContext context)
    {
        // İstediğiniz değeri kontrol et
        if (context.Request.Query.ContainsKey("Id") && context.Request.Query["Id"] == "")
        {
            context.Response.StatusCode = StatusCodes.Status400BadRequest;
            await context.Response.WriteAsync("Warning");
            return;
        }

        await _next(context);
    }
}