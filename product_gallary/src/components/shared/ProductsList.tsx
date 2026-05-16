import { GalleryHeader } from "src/components/shared/GalleryHeader";
import { ProductGallery } from "src/components/shared/ProductGallery";
import { Button } from "src/components/ui/button";
import { useProducts } from "src/hooks/useProducts";

const ProductsList = () => {
  const {
    loading,
    error,
    search,
    setSearch,
    filteredProducts,
    categoryLabel,
    isAllCategory,
    isElectronicsCategory,
    isClothingCategory,
    updateCategoryFilter,
  } = useProducts();

  return (
    <div>
      <GalleryHeader search={search} onSearchChange={setSearch} />
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Button
            variant={isAllCategory ? "default" : "outline"}
            onClick={() => updateCategoryFilter()}
          >
            All Products
          </Button>
          <Button
            variant={isElectronicsCategory ? "default" : "outline"}
            onClick={() => updateCategoryFilter("electronics")}
          >
            Show Electronics
          </Button>
          <Button
            variant={isClothingCategory ? "default" : "outline"}
            onClick={() => updateCategoryFilter("clothing")}
          >
            Show Clothing
          </Button>
        </div>

        <h2 className="mb-6 text-lg font-semibold">
          Currently Browsing: {categoryLabel}
        </h2>

        <ProductGallery
          products={filteredProducts}
          loading={loading}
          error={error}
          search={search}
        />
      </section>
    </div>
  );
};

export default ProductsList;
