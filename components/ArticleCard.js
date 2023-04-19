const { devIndicators } = require("@/next.config");

function ArticleCard() {
  return (
    <div className="article-card-wrapper">
      <img
        src="https://placehold.co/500x300"
        className="w-full h-auto rounded-lg"
      />
      <div class="description">
        <h3>100 Interior Design Referrence and tips for Your</h3>
        <div className="user-profile text-xs text-slate-400">
          <img src="https://placehold.co/32x32" className="rounded-full mr-2" />
          Sweethomy
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
