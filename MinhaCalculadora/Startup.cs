using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MinhaCalculadora.Startup))]
namespace MinhaCalculadora
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
